'use client';

import { ProductCard } from "@/features/products/components/product-card";
import { productService } from "@/features/products/services/product.service";
import { Product } from "@/features/products/types/product.types";
import { useEffect, useState } from "react";
import { ProductCardSkeleton } from '@/features/products/components/product-card-skeleton';
import { ProductsToolbar } from "@/features/products/components/products-toolbar";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPage(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const sort = searchParams.get('sort') || '';

    const handleSearchChange = (
        value: string
    ) => {
        updateParam('search', value);
    };

    const updateParam = (
        key: string,
        value: string
    ) => {
        const params =
            new URLSearchParams(
            searchParams.toString()
            );

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        router.push(
            `/products?${params.toString()}`
        );
    };

    useEffect(() => {
        const loadProducts = async () =>{
            try{
                setLoading(true);
                const response = await productService.getProducts();
                setProducts(response);
            }catch(e){
                console.log(e)
            }finally{
                setLoading(false);
            }
        }
        loadProducts();
    },[]);

    let filteredProducts = [...products];

    if (search) {
    filteredProducts =
        filteredProducts.filter(
        (product) =>
            product.title
            .toLowerCase()
            .includes(
                search.toLowerCase()
            )
        );
    }

    if (category) {
        filteredProducts =
            filteredProducts.filter(
            (product) =>
                product.category ===
                category
            );
    }

    if (sort === 'price_asc') {
        filteredProducts.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === 'price_desc') {
        filteredProducts.sort(
            (a, b) => b.price - a.price
        );
    }
    if (loading) {
        return (
            <div className="p-10 grid grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map(
                (_, index) => (
                <ProductCardSkeleton
                    key={index}
                />
                )
            )}
            </div>
        );
    }

    return (
        <div>
            <ProductsToolbar
                search={search}
                category={category}
                sort={sort}
                onSearchChange={
                    handleSearchChange
                }
                onCategoryChange={(value) =>
                    updateParam(
                    'category',
                    value
                    )
                }
                onSortChange={(value) =>
                    updateParam('sort', value)
                }
            />
            {filteredProducts.length === 0 && (
                <div className="text-center py-20 text-gray-500">
                    No products found
                </div>
            )}
            {filteredProducts.length > 0 && (
                <div className="grid grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                    />
                    ))}
                </div>
            )}
        </div>
    )
}
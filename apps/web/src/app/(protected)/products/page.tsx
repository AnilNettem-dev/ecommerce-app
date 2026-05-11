'use client';

import { ProductCard } from "@/features/products/components/product-card";
import { productService } from "@/features/products/services/product.service";
import { Product } from "@/features/products/types/product.types";
import { useEffect, useState } from "react";
import { ProductCardSkeleton } from '@/features/products/components/product-card-skeleton';

export default function ProductsPage(){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
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
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    )
}
'use client';

import { Product } from "@/features/products/types/product.types";
import { useCartStore } from "../store/cart.store";
import { Trash2 } from 'lucide-react';

type props = {
    product: Product
}

export function AddToCartButton({product}:props){
    const addToCart = useCartStore(
        (state) => state.addToCart
    );

    const item = useCartStore((state) =>
        state.items.find(
            (item) => item.id === product.id
        )
    );
    const increaseQuantity = useCartStore(
        (state) => state.increaseQuantity
    );

    const decreaseQuantity = useCartStore(
        (state) => state.decreaseQuantity
    );

    if (!item) {
        return (
            <button
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                addToCart(product);
                }}
                className="bg-black text-white p-3 rounded-lg"
            >
                Add to Cart
            </button>
        );
    }

    return (
        <div
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
            }}
            className="flex items-center gap-3"
            >
            <button
                onClick={() =>
                    decreaseQuantity(product.id)
                }
                className="border w-8 h-8 rounded flex items-center justify-center"
                >
                {item.quantity === 1 ? (
                    <Trash2 className="w-4 h-4" />
                ) : (
                    '-'
                )}
            </button>

            <span>{item.quantity}</span>

            <button
                onClick={() =>
                increaseQuantity(product.id)
                }
                className="border w-8 h-8 rounded"
            >
                +
            </button>
        </div>
    )
}
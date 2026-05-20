'use client';

import { useCartStore } from "@/features/cart/store/cart.store";
import { formatCurrency } from "@/shared/lib/currency";
import { Trash2 } from "lucide-react";
import Link from 'next/link';

export default function CartPage(){
    const items = useCartStore(
        (state) => state.items
    );
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const increaseQuantity =
        useCartStore(
            (state) =>
            state.increaseQuantity
        );

    const decreaseQuantity =
        useCartStore(
            (state) =>
            state.decreaseQuantity
        );
    const totalPrice = items.reduce((acc,item) => acc + item.quantity * item.price, 0);

    if(items.length === 0){
        return (
            <div className="p-10">
                Your cart is empty
            </div>
        )
    }

    return (
        <div className="p-10 flex flex-col gap-6">
            <h1 className="text-3xl font-bold">
                Cart
            </h1>

            <div className="flex flex-col gap-4">
                {items.map((item) => (
                <div
                    key={item.id}
                    className="border rounded-xl p-4 flex gap-4 items-center"
                >
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 rounded-lg"
                    />

                    <div className="flex-1">
                    <h2 className="font-semibold">
                        {item.title}
                    </h2>

                    <div className="flex items-center gap-3 mt-2">
                        <button
                            onClick={() =>
                                decreaseQuantity(item.id)
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
                            increaseQuantity(item.id)
                            }
                            className="border w-8 h-8 rounded"
                        >
                            +
                        </button>
                    </div>

                    <p>
                        ₹{' '}
                        {formatCurrency(item.price *
                        item.quantity)}
                    </p>
                    </div>

                    <button
                    onClick={() =>
                        removeFromCart(item.id)
                    }
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    >
                    Remove
                    </button>
                </div>
                ))}
            </div>

            <div className="text-2xl font-bold">
                Total: ₹ {formatCurrency(totalPrice)}
            </div>
            <Link
                href="/checkout"
                className="bg-black text-white px-6 py-3 rounded-lg w-fit"
                >
                Proceed to Checkout
            </Link>
        </div>
    )
}
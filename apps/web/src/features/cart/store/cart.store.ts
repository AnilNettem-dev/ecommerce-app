import {create} from 'zustand';
import { cartItem } from '../types/cart.types';
import { Product } from '@/features/products/types/product.types';
import { persist } from 'zustand/middleware';

type cartState = {
    items: cartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (
        productId: string
    ) => void;

    decreaseQuantity: (
        productId: string
    ) => void;
}

export const useCartStore = 
create<cartState>()(
    persist((set, get) => ({
        items: [],
        addToCart: (product: Product) => {
            const items = get().items;
            const existingItem = items.find((item) => product.id == item.id);
            if(existingItem){
                set({
                    items: items.map((item) => 
                        item.id == product.id ? 
                            {
                                ...item,
                                quantity: item.quantity + 1,
                            }
                            : item
                    )
                });
                console.log(get().items);
                return;
            }
            set({
                items: [
                    ...items,
                    {
                        ...product,
                        quantity: 1,
                    }
                ],
            });
            console.log(get().items);

        },
        removeFromCart: (productId) => {
            set({
                items: get().items.filter((item) => item.id != productId),
            });
        },
        increaseQuantity: (productId) => {
            set({
                items: get().items.map((item) => {
                    return item.id === productId ?
                        {
                            ...item,
                            quantity: item.quantity +1 
                        } :
                        item
                })
            })
        },
        decreaseQuantity: (productId) => {
            const items = get().items;
            const existingItem = items.find((item) => item.id === productId);
            if(!existingItem){
                return null;
            }
            if (existingItem.quantity === 1) {
                set({
                items: items.filter(
                    (item) =>
                    item.id !== productId
                ),
                });

                return;
            }
            set({
                items: get().items.map((item) => {
                    return item.id === productId ?
                        {
                            ...item,
                            quantity: item.quantity - 1 
                        } :
                        item
                })
            })
        },
    }),
    {
        name: 'cart-storage'
    })
)
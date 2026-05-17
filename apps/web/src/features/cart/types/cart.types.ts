import { Product } from "@/features/products/types/product.types";

export type cartItem = Product & {
    quantity: number;
}
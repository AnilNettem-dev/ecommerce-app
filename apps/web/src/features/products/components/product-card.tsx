import Link from "next/link";
import { Product } from "../types/product.types";
import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";
import { formatCurrency } from "@/shared/lib/currency";
type props = {
    product: Product
}

export function ProductCard ({product,}:props){
    return (
      <Link href={`/products/${product.id}`}>
            <div className="border rounded-xl p-4 flex flex-col gap-3">
              <img
                src={product.image}
                alt={product.title}
                className="rounded-lg"
                width={100}
                height={100}
              />

              <div>
                <h2 className="font-semibold text-lg">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500">
                  {product.description}
                </p>
              </div>

              <p className="font-bold">
                ₹ {formatCurrency(product.price)}
              </p>
              <AddToCartButton product={product}></AddToCartButton>
            </div>
      </Link>
  );
}
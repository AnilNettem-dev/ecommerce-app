import { Product } from "../types/product.types";

type props = {
    product: Product
}

export function ProductCard ({product,}:props){
    return (
    <div className="border rounded-xl p-4 flex flex-col gap-3">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-lg"
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
        ₹ {product.price}
      </p>
    </div>
  );
}
import { AddToCartButton } from "@/features/cart/components/add-to-cart-button";
import { productService } from "@/features/products/services/product.service";

type props = {
    params: {
        id: string;
    }
}

export default async function ProductDetailsPage({params,}: props){
    const { id } = await params;
    const product = await productService.getProductById(id);

    if(!product){
        return (
            <div>
                No product with this Id
            </div>
        );
    }

    return (
            <div className="p-10 grid grid-cols-2 gap-10">
                <img
                    src={product.image}
                    alt={product.title}
                    className="rounded-xl"
                />

                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-bold">
                    {product.title}
                    </h1>

                    <p className="text-gray-500">
                    {product.description}
                    </p>

                    <p className="text-2xl font-bold">
                    ₹ {product.price}
                    </p>

                    <AddToCartButton product={product}></AddToCartButton>
                </div>
            </div>
    );
}
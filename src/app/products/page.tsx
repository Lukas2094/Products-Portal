import { Suspense } from "react";
import ProductList from "./ProductList";

export default function ProductsPage() {
    return (
        <div>
            <h1 className="text-xl font-bold">Products</h1>
            <Suspense fallback={<p>Loading products...</p>}>
                <ProductList />
            </Suspense>
        </div>
    );
}

import { Suspense } from "react";
import ProductList from "./ProductList";

async function fetchProducts(query: string) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Falha ao buscar os produtos");
    }

    const data = await res.json();
    return data.products;
}

export default async function ProductsPage({ searchParams }: { searchParams: { q: string } }) {
    const products = await fetchProducts(searchParams.q || "");

    return (
        <div className="p-5">
            <h1 className="text-xl font-bold mb-3">Products</h1>

            <form action="/products" method="get" className="mb-5">
                <input
                    type="text"
                    name="q" 
                    defaultValue={searchParams.q} 
                    placeholder="Search products..."
                    className="border p-2 rounded-md w-1/3"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md ml-2">
                    Search
                </button>
            </form>

            <Suspense fallback={<p>Loading products...</p>}>
                <ProductList product={products} />
            </Suspense>
        </div>
    );
}

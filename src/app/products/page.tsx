import { Suspense } from "react";
import ProductList from "./ProductList";

async function fetchProducts(query: string) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
        next: { revalidate: 60 }, // Revalida a cada 60 segundos (opcional)
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
            <Suspense fallback={<p>Loading products...</p>}>
                <ProductList product={products} />
            </Suspense>
        </div>
    );
}

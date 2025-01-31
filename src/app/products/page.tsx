import { Suspense } from "react";
import ProductList from "./ProductList";
import LogoutButton from "../../../components/Buttons/Logout";
import Header from "../../../components/Header/Header";
import { Container } from "@mui/material";

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
    <>
        <Header title="Products"/> 
        <Container className="p-5">
            
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
        </Container> 
    </>
    );
}

'use server';

import { Suspense } from "react";
import ProductList from "./ProductList";
import Header from "../../../components/Header/Header";
import { Box, Container, Typography } from "@mui/material";
import { fetchProducts } from "../api/productsApi/getProducts";

export default async function ProductsPage({ searchParams }: { searchParams: Promise<{ q: string }> }) {
    const params = await searchParams;
    const query = params.q ?? "";
    const products = await fetchProducts(query);
    
    return (
        <>
            <Header src="/images/gif/carSale-unscreen.gif" params={query} />
            <Container className="p-5">
                {products.length === 0 ? (
                    <Box className="flex items-center justify-center mt-28">
                        <Typography variant="h2">No products found</Typography> 
                    </Box>
                ) : (
                    <Suspense fallback={<p>Loading products...</p>}>
                        <ProductList product={products} />
                    </Suspense>
                )}
               
            </Container>
        </>
    );
}

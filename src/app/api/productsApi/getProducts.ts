export async function fetchProducts(query: string) {
    const url = process.env.NEXT_ACCESS_POINT
    const res = await fetch(`${url}/products/search?q=${query}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        throw new Error("Falha ao buscar os produtos");
    }

    const data = await res.json();
    return data.products;
}

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

async function fetchProducts(query: string) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`, {
        cache: "no-store", // Força SSR em toda requisição
    });
    const data = await res.json();
    return data.products;
}

export default async function ProductList() {
    const searchParams = useSearchParams();
    const query = searchParams.get("q") || "";
    const products = await fetchProducts(query);

    return (
        <ul className="grid grid-cols-3 gap-4">
            {products.map((product: any) => (
                <motion.li
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 border rounded"
                >
                    {product.title}
                </motion.li>
            ))}
        </ul>
    );
}

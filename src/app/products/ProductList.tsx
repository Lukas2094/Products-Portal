"use client";

import { motion } from "framer-motion";

export default function ProductList({ product }: any) {

    return (
        <ul className="grid grid-cols-4 gap-4">
            {product.map((item: any) => (
                <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="p-4 border rounded shadow-lg"
                >
                    <div className="w-auto flex items-center justify-center">
                       <img

                        src={item.images}
                        alt={item.title}
                        className="w-10/12 h-48 object-contain rounded-t"
                    />  
                    </div>  
                   
                    <div className="p-4">
                        <h3 className="text-lg font-bold">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="mt-2 text-xl font-semibold">${item.price}</p>
                    </div>
                </motion.li>
            ))}
        </ul>
    );
}

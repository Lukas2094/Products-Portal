"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); 
    }, []);

    if (!isClient) {
        return null; 
    }

    const handleLogout = () => {
        signOut({ callbackUrl: "/login" });
    };

    return (
        <button
            onClick={handleLogout}
            className="text-white p-2 rounded-md mt-5"
            style={{ backgroundColor: "red" }}
        >
            Logout
        </button>
    );
};

export default LogoutButton;

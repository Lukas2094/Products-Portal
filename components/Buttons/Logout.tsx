"use client"; 

import { signOut } from "next-auth/react"; 

const LogoutButton = () => {
    const handleLogout = () => {
        signOut({ callbackUrl: "/login" }); 
    };

    return (
        <button
            onClick={handleLogout}
            className="bg-red-500 text-white p-2 rounded-md mt-5"
        >
            Logout
        </button>
    );
};

export default LogoutButton;

"use client";

import { useEffect, useState } from "react";
import { signOut } from "next-auth/react";
import { Button } from "@mui/material";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

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
        <Button
            onClick={handleLogout}
            variant="contained"
            color="error"
            startIcon={<LogoutOutlinedIcon />}
            sx={{ mr: 2 , alignItems: 'center' , display: 'flex' ,  justifyContent: 'center' , fontWeight: 'bold' }}
        >
            Logout
        </Button>
    );
};

export default LogoutButton;

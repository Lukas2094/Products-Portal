'use client';

import { FC } from "react";
import LogoutButton from "../Buttons/Logout";
import { Box, TextField, Button } from "@mui/material";
import Image from "next/image";

interface HeaderProps {
  src: string;
  params: any;
}

const Header: FC<HeaderProps> = ({ src, params }) => {
  return (
    <Box sx={{ backgroundColor: '#1F2937', width: '100%', height: 70, position: 'fixed', zIndex: 50 }}>
      <Box
        width="100%"
        height={70}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          padding: 1,
          position: 'sticky',
          top: 0,
          boxShadow: 2, 
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFF',
            borderRadius: '50%',
            marginLeft: 2,
          }}
        >
          <Image
            style={{ cursor: 'pointer' }}
            src={src}
            alt="logo"
            width={50}
            height={50}
            quality={90}
          />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <form action="/products" method="get" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <TextField
              name="q"
              defaultValue={params}
              placeholder="Search products..."
              variant="outlined"
              fullWidth
              sx={{ maxWidth: 250 , backgroundColor: '#FFF' ,borderRadius: 2 }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginLeft: 2 , fontWeight: 'bold', color: '#FFF' }}
            >
              Search
            </Button>
          </form>
        </Box>

        <LogoutButton />
      </Box>
    </Box>
  );
};

export default Header;

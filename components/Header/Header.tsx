// components/Header.tsx

import { FC } from "react";
import LogoutButton from "../Buttons/Logout";
import { Box, Container, Typography } from "@mui/material";

interface HeaderProps {
  title: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return (
    <div style={{backgroundColor: 'blue'}} className="w-full">
      <Box
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        className="p-5 !sticky top-0 z-50 shadow-md" 
      >
        <Typography className="!text-xl !font-bold !text-white">{title}</Typography>
        <LogoutButton />
      </Box>
    </div>
  );
};

export default Header;

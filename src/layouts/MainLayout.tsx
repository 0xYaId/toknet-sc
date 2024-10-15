// src/layouts/MainLayout.tsx

import { Box, Flex } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Navbar from "../components/common/Navbar/Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" minHeight="100vh">
      <Navbar />
      <Box flex="1" p={{ base: 2, md: 4, lg: 6 }}>
        {children}
      </Box>
      {/* Optional: Add Footer here */}
    </Flex>
  );
};

export default MainLayout;

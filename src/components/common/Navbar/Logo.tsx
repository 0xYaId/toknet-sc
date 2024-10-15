// src/components/common/Logo.tsx

import { Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import React, { useState } from "react";

const MotionDiv = motion.div;

const Logo: React.FC = () => {
  const [isRotating, setIsRotating] = useState<boolean>(false);

  const handleLogoClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  };

  return (
    <Flex justify={{ base: 'center', md: 'left' }} cursor="pointer">
      <RouterLink to="/" onClick={handleLogoClick}>
        <MotionDiv
          animate={{ rotate: isRotating ? 360 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image src="/logo.svg" alt="Toknet Logo" width="40px" height="40px" />
        </MotionDiv>
      </RouterLink>
    </Flex>
  );
};

export default Logo;

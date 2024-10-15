import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="gray.200" py={4}>
      <Text textAlign="center">
        © {new Date().getFullYear()} Toknet. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;

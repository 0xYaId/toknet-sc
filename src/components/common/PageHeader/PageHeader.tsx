import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <Box textAlign="center" mb={6}>
      <Heading color="blue.700" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="extrabold">
        {title}
      </Heading>
      <Text color="gray.600" fontSize={{ base: 'md', md: 'lg' }} mt={2}>
        {subtitle}
      </Text>
    </Box>
  );
};

export default PageHeader;

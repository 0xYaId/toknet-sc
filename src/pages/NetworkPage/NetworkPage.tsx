// src/pages/NetworkPage/NetworkPage.tsx

import React from 'react';
import { Container } from '@chakra-ui/react';
import PageHeader from '../../components/common/PageHeader/PageHeader';

const NetworkPage: React.FC = () => {

  return (
    <Container maxW="container.lg" mt={10}>
      <PageHeader
        title="Network Participants Management"
        subtitle="Easily manage participants in the network."
      />
    </Container>
  );
};

export default NetworkPage;

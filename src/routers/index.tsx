// src/routers/index.tsx

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { SolanaProvider } from '../contexts/SolanaContext';
import {WalletContext} from '../contexts/WalletContext';
import { ChakraProvider, Spinner, Center } from '@chakra-ui/react';
import '@solana/wallet-adapter-react-ui/styles.css';
import theme from '../theme';
import NetworkPage from '../pages/NetworkPage/NetworkPage';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const AppRouter: React.FC = () => {
  return (
    <ChakraProvider theme={theme}>
      <SolanaProvider>
        <WalletContext>
            <Router>
              <MainLayout>
                <Suspense
                  fallback={
                    <Center height="100vh">
                      <Spinner size="xl" />
                    </Center>
                  }
                >
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/network" element={<NetworkPage />} />
                  </Routes>
                </Suspense>
              </MainLayout>
            </Router>
        </WalletContext>
      </SolanaProvider>
    </ChakraProvider>
  );
};

export default AppRouter;

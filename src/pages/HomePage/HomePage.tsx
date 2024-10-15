// src/pages/HomePage/HomePage.tsx

import React, { useEffect, useState } from 'react';
import { Box, Text, VStack, Heading, Divider } from '@chakra-ui/react';
import { useSolana } from '../../hooks/useSolana';
import { useWallet } from '../../hooks/useWallet';
import { getBalance } from '../../services/solanaService';

const HomePage: React.FC = () => {
  const { connection } = useSolana();
  const wallet = useWallet();

  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const fetchBalance = async () => {
      if (connection && wallet.publicKey) {
        try {
          const bal = await getBalance(wallet.publicKey, connection);
          setBalance(bal);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [connection, wallet.publicKey]);


  return (
    <Box maxW="md" mx="auto" mt={8} p={6} boxShadow="md" borderRadius="md">
      <VStack spacing={4} align="stretch">
        <Heading as="h2" size="lg" textAlign="center">
          Welcome to Toknet
        </Heading>
        <Divider />
        {wallet.publicKey ? (
          <>
            <Text fontSize="md">
              <strong>Address:</strong> {wallet.publicKey.toBase58()}
            </Text>
            <Text fontSize="md">
              <strong>Balance:</strong> {balance !== null ? `${balance} SOL` : 'Loading...'}
            </Text>
          </>
        ) : (
          <Text>Please connect your wallet to view your details.</Text>
        )}
      </VStack>
    </Box>
  );
};

export default HomePage;

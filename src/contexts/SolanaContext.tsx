// src/contexts/SolanaContext.tsx

import React, { createContext, FC, ReactNode, useMemo } from 'react';
import { Connection, Commitment } from '@solana/web3.js';
import { endpoint, SolanaNetwork, network as solanaNetwork } from '../config/solanaConfig';

interface SolanaContextProps {
  network: SolanaNetwork;
  connection: Connection;
}

export const SolanaContext = createContext<SolanaContextProps | undefined>(undefined);

interface SolanaProviderProps {
  children: ReactNode;
}

export const SolanaProvider: FC<SolanaProviderProps> = ({ children }) => {
  const network: SolanaNetwork = solanaNetwork;
  const commitment: Commitment = 'confirmed';

  const connection = useMemo(() => new Connection(endpoint, commitment), [commitment]);


  return (
    <SolanaContext.Provider value={{ network, connection }}>
      {children}
    </SolanaContext.Provider>
  );
};

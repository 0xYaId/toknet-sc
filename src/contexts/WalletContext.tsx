// src/contexts/WalletContext.tsx

import React, { FC, ReactNode, useMemo } from 'react';
import {
  ConnectionProvider,
  WalletProvider as AdapterWalletProvider,
} from '@solana/wallet-adapter-react';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import {
  PhantomWalletAdapter,
  // Add other wallet adapters as needed
} from '@solana/wallet-adapter-wallets';
import { endpoint } from '../config/solanaConfig';

/**
 * Note: Ensure that '@solana/wallet-adapter-react-ui/styles.css' is imported in index.tsx
 */

interface WalletContextProps {
  children: ReactNode;
}

export const WalletContext: FC<WalletContextProps> = ({ children }) => {
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      // Initialize other wallets here
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <AdapterWalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </AdapterWalletProvider>
    </ConnectionProvider>
  );
};

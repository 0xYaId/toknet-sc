import { useWallet as useSolanaWallet } from '@solana/wallet-adapter-react';

export const useWallet = () => {
  const wallet = useSolanaWallet();
  return wallet;
};

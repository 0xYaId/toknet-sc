import { clusterApiUrl } from '@solana/web3.js';

export type SolanaNetwork = 'devnet' | 'testnet' | 'mainnet-beta';


const getNetwork = (): SolanaNetwork => {
  const network = (process.env.REACT_APP_SOLANA_NETWORK as SolanaNetwork) || 'devnet';
  return network;
};

export const network: SolanaNetwork = getNetwork();

export const endpoint: string = clusterApiUrl(network);

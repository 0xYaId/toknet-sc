// src/services/solanaService.ts

import { PublicKey, Connection } from '@solana/web3.js';

/**
 * Retrieves the SOL balance for a given public key.
 * @param publicKey - The public key of the wallet.
 * @param connection - The Solana connection object.
 * @returns The balance in SOL.
 */
export const getBalance = async (publicKey: PublicKey, connection: Connection): Promise<number> => {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9; // Convert lamports to SOL
  } catch (error) {
    console.error('Error fetching balance:', error);
    throw error;
  }
};

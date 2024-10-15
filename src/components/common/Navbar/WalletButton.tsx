// src/components/common/WalletButton/WalletButton.tsx

import React, { useMemo } from 'react';
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { useWallet } from '../../../hooks/useWallet';
import { useWalletModal } from '@solana/wallet-adapter-react-ui';
import { getBalance } from '../../../services/solanaService';
import { useSolana } from '../../../hooks/useSolana';

const WalletButton: React.FC = () => {
  const { publicKey, wallet, disconnect } = useWallet();
  const { setVisible } = useWalletModal();
  const { connection } = useSolana();

  const [balance, setBalance] = React.useState<number | null>(null);

  React.useEffect(() => {
    const fetchBalance = async () => {
      if (connection && publicKey) {
        try {
          const bal = await getBalance(publicKey, connection);
          setBalance(bal);
        } catch (error) {
          console.error('Error fetching balance:', error);
        }
      }
    };

    fetchBalance();
  }, [connection, publicKey]);

  const shortenedAddress = useMemo<string | null>(() => {
    if (!publicKey) return null;
    const address = publicKey.toString();
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  }, [publicKey]);

  return (
    <>
      {wallet && publicKey ? (
        <Menu>
          <MenuButton as={Button} colorScheme="blue" variant="outline">
            {shortenedAddress} - {balance !== null ? `${balance} SOL` : 'Loading...'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={disconnect}>Disconnect</MenuItem>
          </MenuList>
        </Menu>
      ) : (
        <Button colorScheme="blue" onClick={() => setVisible(true)}>
          Connect Wallet
        </Button>
      )}
    </>
  );
};

export default WalletButton;

// src/components/common/Navbar.tsx

import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  HStack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import MenuItems from './MenuItems';
import WalletButton from './WalletButton';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        {/* Hamburger Menu for Mobile */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          mr={2}
        />

        {/* Logo */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Logo />
        </Box>

        {/* Navigation Menu */}
        <Flex flex={1} justifyContent="center">
          <HStack
            as="nav"
            spacing={4}
            justifyContent="center"
            display={{ base: 'none', md: 'flex' }}
          >
            <MenuItems />
          </HStack>
        </Flex>

        {/* Wallet Connection */}
        <Flex alignItems="center">
          <WalletButton />
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <MenuItems isMobile onClose={onClose} />
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;

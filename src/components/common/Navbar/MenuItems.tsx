// src/components/common/MenuItems.tsx

import React from 'react';
import { Button } from '@chakra-ui/react';
import { MENU_ITEMS, MenuItem } from './navbar.constants';
import { Link as RouterLink } from 'react-router-dom';

interface MenuItemsProps {
  isMobile?: boolean;
  onClose?: () => void;
}

const MenuItems: React.FC<MenuItemsProps> = ({ isMobile = false, onClose }) => {
  return (
    <>
      {MENU_ITEMS.map((item: MenuItem) => (
        <Button
          as={RouterLink}
          to={item.href}
          key={item.label}
          variant="ghost"
          width={isMobile ? '100%' : 'auto'}
          textAlign="center"
          onClick={onClose}
          color="blue.700"
        >
          {item.label}
        </Button>
      ))}
    </>
  );
};

export default MenuItems;

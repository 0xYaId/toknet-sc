// src/components/common/navbar.constants.ts

export interface MenuItem {
  label: string;
  href: string;
}

export const MENU_ITEMS: MenuItem[] = [
  { label: 'Network', href: '/network' },
  { label: 'Tokenize', href: '/tokenize' },
  { label: 'Tracer', href: '/trace' },
  { label: 'Block Explorer', href: '/explorer' },
];

const Button = {
  baseStyle: {},

  sizes: {},

  variants: {
    buttonPrimary: {
      bg: 'blue.400',
      color: 'white',
      _hover: {
        bg: 'blue.500',
      },
    },
    buttonSecondary: {
      bg: 'white',
      color: 'blue.400',
      border: '1px solid',
      borderColor: 'blue.400',
      _hover: {
        bg: 'blue.50',
      },
    },

    primaryShadow: {
      mt: 10,
      w: 'full',
      bg: 'purple.600',
      color: 'white',
      rounded: 'xl',
      boxShadow: '0 5px 20px 0px rgb(72 187 120 / 43%)',
      _hover: {
        bg: 'purple.700',
      },
      _active: {
        bg: 'purple.800',
      },
    },
    SecondaryShadow: {
      mt: 10,
      w: 'full',
      bg: 'pink.600',
      color: 'white',
      rounded: 'xl',
      boxShadow: '0 5px 20px 0px rgb(72 187 120 / 43%)',
      _hover: {
        bg: 'pink.700',
      },
      _focus: {
        bg: 'pink.800',
      },
    },
    primary: {
      bg: 'primary.7',
      color: 'white',
      rounded: 'lg',
      _hover: {
        bg: 'primary.30',
      },
      _active: {
        bg: 'primary.34',
      },
    },

    primaryDark: {
      bg: 'primary.7',
      color: 'primary.4',
      rounded: 'lg',
      _hover: {
        bg: 'gray.700',
      },
      _active: {
        bg: 'gray.800',
      },
    },

    primaryOutline: {
      pl: 2,
      bg: 'transparent',
      color: 'primary.7',
      rounded: 'lg',
      size: 'sm',
      border: '1px solid',
      borderColor: 'primary.7',
      _hover: {
        bg: 'primary.14',
        color: 'gray.50',
      },
      _active: {
        bg: 'purple.800',
        borderColor: 'purple.800',
        color: 'pink.50',
      },
    },
    TableButton: {
      bg: 'color.icon',
      color: 'pink.50',
      borderColor: 'transparent',
      _hover: {
        bg: 'gray.700',
      },
      _active: {
        bg: 'color.icon',
      },
    },

    primaryStyle1: {
      bg: 'primary.1',
      border: '1px solid',
      borderColor: 'primary.1',
      color: 'text.white',
      _hover: {
        bg: 'purple.500',
      },
    },
    primaryOutlineStyle1: {
      border: '1px solid',
      borderColor: 'primary.1',
      color: 'primary.1',
      _hover: {
        bg: 'purple.50',
      },
    },
    primaryStyle2: {
      border: '1px solid',
      bg: 'red.500',
      color: '#ffffff',
      _hover: {
        bg: 'red.600',
      },
    },
  },
  defaultProps: {},
};

export default Button;

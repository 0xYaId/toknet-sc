const Checkbox = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: {
      control: {
        _checked: {
          bg: 'primary.1',
          color: 'white',
          borderColor: 'primary.1',
        },
        _focus: {
          boxShadow: '0 0 2px 2px #BE81DB',
        },
        _hover: {
          bg: 'purple.800',
        },
      },
    },
  },
};

export default Checkbox;

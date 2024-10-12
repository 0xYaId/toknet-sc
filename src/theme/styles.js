import { mode } from '@chakra-ui/theme-tools';

const styles = {
  global: (props) => ({
    body: {
      bg: mode('gray.100', 'gray.800')(props),
      color: mode('gray.800', 'gray.700')(props),
    },
    a: {
      color: mode('blue.600', 'blue.300')(props),
    },
  }),
};

export default styles;

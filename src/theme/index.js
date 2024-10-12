import { extendTheme } from '@chakra-ui/react';

import styles from './styles';
import borders from './foundations/borders';
import Input from './components/input';
import Checkbox from './components/checkbox';
import Button from './components/button';
import colors from './foundations/colors';
import fonts from './foundations/fonts';

const overrides = {
  styles,
  borders,
  colors,
  fonts,

  components: {
    Button,
    Input,
    Checkbox,
  },
};

export default extendTheme(overrides);

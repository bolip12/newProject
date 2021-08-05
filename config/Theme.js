import * as React from 'react';
import { DefaultTheme } from 'react-native-paper';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'green',
    accent: 'lightgreen',
    background: 'white'
  },
};

export default Theme;

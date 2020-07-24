import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { makeBorder } from './border';

const colors = {
  red: '#E64D61',
  redLight: '#FFD3D9',
  greyBorder: '#CBCBCB',
  darkBlue: '#1E1735',
  primaryPink: '#E63647',
  pink: '#FB5B91',
  yellow: '#F2D535',
  lighterYellow: '#EED66E',
  white: '#EEFCF3',
  blue: '#2196f3',
  lightBlue: '#E4EBF5',
  green: '#00B96F',
};

export interface CustomTheme extends Theme {
  border: typeof makeBorder;
}

let muiTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: colors.lightBlue,
    },
    error: {
      light: colors.redLight,
      main: colors.red,
    },
    info: {
      main: colors.darkBlue,
    },
    primary: {
      main: colors.blue,
      light: colors.lightBlue,
    },
    secondary: {
      main: colors.primaryPink,
      light: colors.pink,
    },
    success: {
      contrastText: colors.white,
      main: colors.green,
      light: colors.yellow,
    },
    text: {
      primary: '#4A4A4A',
      secondary: colors.darkBlue,
    },
    warning: {
      contrastText: colors.white,
      main: colors.yellow,
      light: colors.lighterYellow,
    },
    grey: {
      400: colors.greyBorder,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: colors.white,
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'normal',
    },
    h6: {
      fontWeight: 'normal',
    },
  },
});

muiTheme.shadows[24] = '0px 3px 10px rgba(0, 0, 0, 0.08)';

const theme: CustomTheme = {
  ...responsiveFontSizes(muiTheme),
  border: makeBorder,
};

export { theme };

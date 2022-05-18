import { ThemeOptions } from '@mui/material/styles';
import { alpha } from "@mui/material";

const lightThemeOptions: ThemeOptions = {
  typography: {
    h1:{
      fontSize: '3rem',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3CB474',
      light: alpha('#3CB474', 0.3),
      contrastText: '#fff'
    },
    error: {
      main: '#CC3333'
    }
  }
};

export default lightThemeOptions;
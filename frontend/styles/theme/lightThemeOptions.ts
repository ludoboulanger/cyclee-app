import { ThemeOptions } from '@mui/material/styles';
import { alpha } from "@mui/material";

const lightThemeOptions: ThemeOptions = {
  typography: {
    h1:{
      fontSize: '3rem',
    },
    h2:{
      fontSize: '2rem',
    },
    button:{
      textTransform: 'none',
      fontSize: "0.875rem",
      lineHeight:"0.875rem",
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#3CB474',
      light: alpha('#3CB474', 0.3),
      contrastText: '#fff'
    },
    secondary: {	
      main: alpha('#3CB474', 0.3),
      contrastText: '#3CB474',
    },
    error: {
      main: '#CC3333'
    },
  },
  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        root: {
        borderRadius: '3px',
        paddingTop:'13px',
        paddingBottom:'13px',
        paddingLeft:'20px',
        paddingRight:'20px',
        boxShadow: "none",
        }
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          whiteSpace:'pre-wrap',
        }
      },
    },
  },
};

export default lightThemeOptions;
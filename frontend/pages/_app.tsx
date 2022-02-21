import * as React from 'react';
import type { AppProps } from 'next/app';
import { CacheProvider} from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme, Box } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import createEmotionCache from '../utils/createEmotionCache';
import lightThemeOptions from '../styles/theme/lightThemeOptions';
import '../styles/globals.css';
import {appWithTranslation} from 'next-i18next';
import '../firebase.config';

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

function MyApp({ Component, pageProps}: AppProps) {

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Box sx={{height:"100vh"}}> 
          <Component {...pageProps} />; 
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default appWithTranslation(MyApp);
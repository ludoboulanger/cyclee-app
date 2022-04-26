import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import createEmotionCache from "../utils/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";
import "../firebase.config";
import BottomNavigationBar from "../components/bottom-navigation-bar";
import { Mobile } from "../components/responsive-viewport";
import NavigationBar from "../components/navigation-bar";
import { AuthProvider } from "../services/auth";

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <AuthProvider>
          <NavigationBar />
          <Component {...pageProps} />
          <Mobile>
            <BottomNavigationBar />
          </Mobile>
        </AuthProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);

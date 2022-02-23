import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/router";

const clientSideEmotionCache = createEmotionCache();

const lightTheme = createTheme(lightThemeOptions);

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: String) => {
      console.log(`Loading ${url}`);
      setLoading(true);
    };
    const handleComplete = () => setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);

  return (
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(MyApp);

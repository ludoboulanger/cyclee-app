import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {appWithTranslation} from 'next-i18next';
import '../firebase.config';

function MyApp({ Component, pageProps }: AppProps) {
  return( <div style = {{height:"100vh"}}> <Component {...pageProps} />; </div>);
}

export default appWithTranslation(MyApp);

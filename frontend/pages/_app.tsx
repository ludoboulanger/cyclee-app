import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  const test = (big:number) => {
    console.log("Hpli");
  };

  return <Component {...pageProps} />;
}

export default MyApp;

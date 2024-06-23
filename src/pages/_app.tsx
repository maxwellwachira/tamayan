import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';
//import { GoogleAnalytics } from '@next/third-parties/google';
import PageLoader from '@/components/common/pageLoader/pageLoader';
import { RefreshPageProvider } from '@/contexts/refreshContext';
import GoogleAnalytics from '@/components/googleAnalytics';


const theme = createTheme({
  fontFamily: 'Nunito Sans, sans-serif'
});

function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(true), 700);
  }, []);

  return (
    <>
      <ColorSchemeScript defaultColorScheme="light" />
      <MantineProvider theme={theme} defaultColorScheme="light">
        <RefreshPageProvider>
          {!loading ?
            (<PageLoader />) :
            <>
            <GoogleAnalytics />
            <Component {...pageProps} />
            </>

          }
        </RefreshPageProvider>
      </MantineProvider>
    </>
  );

}

export default MyApp;
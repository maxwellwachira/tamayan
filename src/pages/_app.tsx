import '@mantine/core/styles.css';
import '@/styles/globals.css';
import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core';

import PageLoader from '@/components/common/pageLoader/pageLoader';


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
        {!loading ?
          (<PageLoader />) :
          <>
            <Component {...pageProps} />
          </>
        }
      </MantineProvider>
    </>
  );

}

export default MyApp;
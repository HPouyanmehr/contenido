import * as React from 'react';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Types
import type { AppProps as NextAppProps } from 'next/app';

// Custom Utilities
import createEmotionCache from 'utilities/styling/emotion';
import theme from 'utilities/styling/theme';

// Custom Styles
import cascadiaCode from 'utilities/styling/fonts/cascadiaCode';
import 'styles/globals.css';

// Custom Types
interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const App = (props: AppProps) => {
  // Props
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={cascadiaCode.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;

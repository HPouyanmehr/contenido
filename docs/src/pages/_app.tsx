import * as React from 'react';
import Head from 'next/head';
import { CacheProvider, EmotionCache } from '@emotion/react';

// Types
import type { AppProps as NextAppProps } from 'next/app';

// Styles
import 'contenido/dist/styles.css';

// Custom Contexts
import ContextProvider from 'store/Provider';

// Custom Utilities
import createEmotionCache from 'utilities/styling/emotion';

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
      <ContextProvider>
        <div className={cascadiaCode.className}>
          <Component {...pageProps} />
        </div>
      </ContextProvider>
    </CacheProvider>
  );
};

export default App;

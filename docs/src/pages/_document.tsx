import * as React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';

// Custom Utilities
import createEmotionCache from 'utilities/styling/emotion';
import theme from 'utilities/styling/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          {/* PWA primary color */}
          <meta name='theme-color' content={theme.palette.primary.main} />
          <meta name='emotion-insertion-point' content='' />
          {(this.props as any).emotionStyleTags}
          {/* Favicons */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/assets/images/favicon/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/assets/images/favicon/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='194x194'
            href='/assets/images/favicon/favicon-194x194.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/assets/images/favicon/android-chrome-192x192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/assets/images/favicon/favicon-16x16.png'
          />
          <link rel='manifest' href='/assets/images/favicon/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/assets/images/favicon/safari-pinned-tab.svg'
            color='#4cb5f5'
          />
          <link rel='shortcut icon' href='/assets/images/favicon/favicon.ico' />
          <meta name='apple-mobile-web-app-title' content='Contenido' />
          <meta name='application-name' content='Contenido' />
          <meta name='msapplication-TileColor' content='#2d89ef' />
          <meta
            name='msapplication-config'
            content='/assets/images/favicon/browserconfig.xml'
          />
          <meta name='theme-color' content='#ffffff'></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};

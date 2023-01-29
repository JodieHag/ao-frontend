import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet?.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => (props) =>
            sheet?.collectStyles(<Component {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        locale: ctx.locale,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="keywords"
            content="Avistamientos ovni, Fenómenos aéreos anómalos, Ovnis, Ufología, Extraterrestres, Ovni en España, Ovni en México, Ovni en Argentina, Ovni en Chile, Ovni en Estados Unidos, Ovni en Brasil, Ovni en Colombia, Ovni en Perú, Ovni en Ecuador, Ovni en Venezuela, Ovni en Uruguay, Ovni en Paraguay, Ovni en Bolivia"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Staatliches" />
          <script src="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.js" async />
          <link href="https://unpkg.com/maplibre-gl@2.4.0/dist/maplibre-gl.css" rel="stylesheet" />
          <script
            src="https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.2.0/dist/maplibre-gl-geocoder.min.js"
            async
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/@maplibre/maplibre-gl-geocoder@1.2.0/dist/maplibre-gl-geocoder.css"
            type="text/css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="50x50"
            href="/images/rufans.png"
          />
          <meta name="description" content="Solomon Emetonjo's Portfolio" />
          <meta name="author" content="Solomon Emetonjo" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* You can add static Open Graph or Twitter meta tags here */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

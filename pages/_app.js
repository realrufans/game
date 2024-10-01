import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Solomon Emetonjo | Frontend Developer</title>
        <meta
          name="description"
          content="Solomon Emetonjo is a frontend developer specializing in React, Next.js, Tailwind CSS, and building modern web applications."
        />
        <meta
          name="keywords"
          content="frontend developer, React, Next.js, Tailwind CSS, web developer, JavaScript, portfolio"
        />
        <meta name="author" content="Solomon Emetonjo" />

        {/* Open Graph Meta Tags for Social Sharing */}
        <meta
          property="og:title"
          content="Solomon Emetonjo | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Explore Solomon Emetonjo's portfolio of web applications built with React, Next.js, Tailwind CSS, and more."
        />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Solomon Emetonjo | Frontend Developer"
        />
        <meta
          name="twitter:description"
          content="Frontend developer with expertise in React, Next.js, and building high-performance web applications."
        />
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <link rel="canonical" href="https://metonj.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider attribute="class" enableSystem={true}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;

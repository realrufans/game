import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
 
      <ThemeProvider attribute="class" enableSystem={true}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;

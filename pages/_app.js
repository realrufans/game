
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "../components/footer";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;

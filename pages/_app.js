import '../styles/globals.css';
import Head from 'next/head';
import Link from "next/link";
import { ThemeProvider } from "styled-components";

//add metadata later

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <Head>
        <title>Eggsperiments</title>
        <link
            rel="preload"
            href="../public/fonts/MBFNanomaton.otf"
            as="font"
            crossOrigin=""
        />
        <link
            rel="preload"
            href="../public/fonts/CartographCFRegular.otf"
            as="font"
            crossOrigin=""
        />
      </Head>
    </div>
    
  )
}

export default MyApp

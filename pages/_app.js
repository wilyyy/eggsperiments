import '../styles/globals.css';
import Head from 'next/head';
import Link from "next/link";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/ThemeConfig";
import styled from 'styled-components';

import LightSwitch from '../comps/LightSwitch';

const LightCont = styled.div`
  position: absolute;
  top: 30px;
  left: 65%;
`;

//add metadata later

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
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
      <Component {...pageProps} />

      <LightCont>
        <LightSwitch onButtonPress={toggleTheme} />
      </LightCont>

    </ThemeProvider>
    
  )
}

export default MyApp

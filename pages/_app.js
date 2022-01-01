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
  top: 2%;
  right: 1.5%;
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
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta 
          name="Eggsperiments" 
          content="Experimental break project project by William Laurel Alvarez.
          Developed in react based framework NextJS. The premise of the app is to collect eggs" 
        />
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

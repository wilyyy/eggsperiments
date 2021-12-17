// import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";

import LandingTab from '../comps/landingTab';
import ScrambledEgg from '../comps/animations/ScrambledEgg';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.BASE};
  color: #fff;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {

  const [collectedEgg, setCollectedEgg] = useState(true);
  const eggAnim = "https://assets1.lottiefiles.com/packages/lf20_OyFTHm.json";
  const giftAnim = "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json";

  const changeAnim = () => {
    setCollectedEgg(!collectedEgg);
  }
  return (
    <Page>
      <ScrambledEgg animation={collectedEgg ? eggAnim : giftAnim}/>
      <LandingTab onHomePress={changeAnim}/>
    </Page>
  )
}

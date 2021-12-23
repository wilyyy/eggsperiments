import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";
import { useRouter } from 'next/router';

import testAnim from './test/testAnim';
import LandingNav from '../comps/LandingNav';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, ${COLORS.BASE} 0%, ${COLORS.SUPERLIGHTTINT} 100%);
  color: #fff;
  width: 100vw;
  height: 100vh;
`;

export default function Home() {
  // const router = useRouter();
  // const [collectedEgg, setCollectedEgg] = useState(true);
  // const eggAnim = "https://assets1.lottiefiles.com/packages/lf20_OyFTHm.json";
  // const giftAnim = "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json";

  // const changeAnim = () => {
  //   setCollectedEgg(!collectedEgg);
  // }

  return (
    <Page>
      <LandingNav />
    </Page>
  );
}

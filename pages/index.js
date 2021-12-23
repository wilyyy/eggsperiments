import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";
import { useRouter } from 'next/router';

import testAnim from './test/testAnim';
import LandingNav from '../comps/LandingNav';
import AuthCard from '../comps/AuthCard';
import LightSwitch from '../comps/LightSwitch';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(180deg, ${COLORS.BASE} 0%, ${COLORS.SUPERLIGHTTINT} 100%);
  color: #fff;
  width: 100vw;
  height: 100vh;
`;

const LightCont = styled.div`
  position: absolute;
  top: 30px;
  left: 65%;
`;

export default function Home() {
  // const router = useRouter();
  const [counter, setCounter] = useState(0);

  return (
    <Page>
      <LandingNav />
      <AuthCard />
      <LightCont>
          <LightSwitch />
      </LightCont>
    </Page>
  );
}

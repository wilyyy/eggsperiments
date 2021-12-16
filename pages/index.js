import Image from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

import LandingTab from '../comps/landingTab';

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
  return (
    <Page>
      <LandingTab />
    </Page>
  )
}

import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";

import LandingNav from '../comps/LandingNav';
import LightSwitch from '../comps/LightSwitch';
import HomeSection from '../comps/HomeSection';
import AboutSection from '../comps/AboutSection';
import FeaturesSection from '../comps/FeaturesSection';

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
  const [page, setPage] = useState("Home");
  return (
    <Page>
      <LandingNav 
        onHomePress={()=>{setPage("Home")}}
        onAboutPress={()=>{setPage("About")}}
        onFeaturesPress={()=>{setPage("Features")}}
      />
      <LightCont>
          <LightSwitch />
      </LightCont>

      {page === "Home" &&
        <HomeSection />
      }
      {page === "About" &&
        <AboutSection />
      }
      {page === "Features" &&
        <FeaturesSection />
      }
    </Page>
  );
}

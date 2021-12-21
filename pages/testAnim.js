import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";
import { motion } from 'framer-motion';

import RectButton from '../comps/RectButton';

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

const testAnim = () => {
    return (
        <motion.div initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            },
          }}>
            <Page>asdasd</Page>
          </motion.div>
    )
}

export default testAnim;
import styled from 'styled-components';
import { COLORS } from '../../styles/Colors';
import { useState } from "react";
import { motion } from 'framer-motion';
// import { useRouter } from 'next/router';
import Head from 'next/head';

import RectButton from '../../comps/RectButton';
import LottieAnim from '../../comps/LottieAnim';
import LandingNav from '../../comps/LandingNav';

const Page = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${COLORS.BASE};
    color: #fff;
    width: 100vw;
    height: 100%;
`;

const testAnim = () => {
    const router = useRouter();

    return (
        <Page 
            initial="pageInitial" 
            animate="pageAnimate" 
            variants={{
                pageInitial: {
                    opacity: 0
                },
                pageAnimate: {
                    opacity: 1
                },
            }}
        >
            <h1>Test Anim</h1>
            <LandingNav />
            <LottieAnim />
            <RectButton 
                onButtonPress={()=>{router.push('/')}}
                text='Go Home'
            />
        </Page>
    );
}

export default testAnim;
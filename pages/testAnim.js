import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import RectButton from '../comps/RectButton';

const Page = styled(motion.div)`
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
            <RectButton 
                onButtonPress={()=>{router.push('/')}}
                text='Go Home'
            />
        </Page>
    )
}

export default testAnim;
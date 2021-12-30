import styled from 'styled-components';
import { useState, useEffect } from "react";
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/router';
import { COLORS } from '../styles/Colors';

import LottieAnim from '../comps/LottieAnim';

const Page = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.BASE};
`;

const Text = styled.p`
    font-size: 36px;
    color: ${({ theme }) => theme.CONTENT};
    position: absolute;
    bottom: 30%;
`;

const Loading = () => {
    useEffect(()=>{
        setTimeout(RouteToDashboard, 5000);
    }, [])

    const router = useRouter();

    const RouteToDashboard = () => {
        router.push('/Dashboard');
    }

    return (
        <Page>
            <Player
                autoplay= 'false' 
                loop
                src="https://assets8.lottiefiles.com/packages/lf20_foi6cxlq.json"
                style={{ height: "300px", width: "300px" }}
            />
            <Text>Loading...</Text>
        </Page>
    )
}

export default Loading;

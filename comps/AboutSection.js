import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

import LottieAnim from './LottieAnim';
import AboutCard from './AboutCard';

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${COLORS.CONTENT};
`;

const H1 = styled.h1`
    font-family: "MBFNanomaton";
`;

const AboutSection = () => {
    return (
        <Container>
            <H1>About</H1>
            <LottieAnim 
                width='200px' 
                height='200px'
                animation="https://assets9.lottiefiles.com/private_files/lf30_vlze61r7.json"
            />
            <AboutCard />
        </Container>
    )
}

export default AboutSection;
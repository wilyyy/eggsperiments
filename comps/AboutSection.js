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
    font-family: "MBFNanomaton";
`;

const H1 = styled.h1`

`;

const AboutSection = () => {
    return (
        <Container>
            <H1>About</H1>
            <LottieAnim />
            <AboutCard />
        </Container>
    )
}

export default AboutSection;
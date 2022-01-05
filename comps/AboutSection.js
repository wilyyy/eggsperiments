import styled from 'styled-components';

import LottieAnim from './LottieAnim';
import AboutCard from './AboutCard';

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.CONTENT};

    @media (max-width: 576px){ 
        position: relative;
        bottom: 7%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
`;

const H1 = styled.h1`
    font-family: "MBFNanomaton";

    @media (max-width: 576px){ 
        font-size: 26px;
    }
`;

const ShowAnim = styled.div`
    display: flex;

    @media (max-width: 576px){ 
        display: none;
    }
`;

const AboutSection = () => {
    return (
        <Container>
            <H1>About</H1>
            <ShowAnim>
                <LottieAnim 
                    width='200px' 
                    height='200px'
                    animation="https://assets9.lottiefiles.com/private_files/lf30_vlze61r7.json"
                />
            </ShowAnim>
            <AboutCard />
        </Container>
    )
}

export default AboutSection;
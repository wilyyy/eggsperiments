import styled from 'styled-components';

import FeaturesCard from './FeaturesCard';

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: "MBFNanomaton";
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

const FeaturesSection = () => {
    return (
        <Container>
            <H1>Features</H1>
            <FeaturesCard />
        </Container>
    )
}

export default FeaturesSection;
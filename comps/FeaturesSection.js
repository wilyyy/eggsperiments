import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

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
`;

const H1 = styled.h1`
    font-family: "MBFNanomaton";
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
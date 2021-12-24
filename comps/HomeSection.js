import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

import AuthCard from './AuthCard';

const Container = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-family: "MBFNanomaton";
    color: ${COLORS.CONTENT};
`;

const H1 = styled.h1`
    font-family: "MBFNanomaton";
`;

const HomeSection = () => {
    return (
        <Container>
            <H1>Eggsperiments</H1>
            <AuthCard />
        </Container>
    )
}

export default HomeSection;
import styled from 'styled-components';

import AuthCard from './AuthCard';

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
        bottom: 3%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
`;

const H1 = styled.h1`
    font-family: "MBFNanomaton";

    @media (max-width: 576px){ 
        font-size: 26px;
    }
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
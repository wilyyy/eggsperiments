import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    aLign-items: center;
    width: 454px;
    height: 522px;
    background: linear-gradient(180deg, ${({ theme }) => theme.BASE} 0%, ${({ theme }) => theme.SUPERLIGHTTINT} 100%);
    box-shadow: -4px -4px 6.5368px ${({ theme }) => theme.SUPERLIGHTTINT}, 4px 4px 6.5368px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.CONTENT};
    padding: 2% 3% 0 3%;

    @media (max-width: 576px){
        width: 324px;
        height: 452px;
        padding: 2%;
    }
`;

const H2 = styled.h2`
    font-size: 24px;
    font-family: "CartographCFRegular";
    align-self: flex-start;
    margin: 0;

    @media (max-width: 576px){
        font-size: 14px;
        align-self: center;
    }
`;

const Ul = styled.ul`
    padding: 1;
`;

const Li = styled.li`
    font-size: 12px;
`;

const Para = styled.p`
    font-size: 12px;
`;

const FeaturesCard = () => {
    return (
        <Container>
            <Para>Below is a List of features that Eggsperiments offers</Para>
            <H2>MVPs</H2>
            <Ul>
                <Li>Custom components and pages created with styled components</Li>
                <Li>Custom animated microinteractions using Animation API (Framer Motion)</Li>
                <Li>Dark Mode / Light Mode toggle</Li>
                <Li>Firebase Email and Google Auth</Li>
                <Li>Responsive Design for mobile devices</Li>
                <Li>Deployed on Vercel & another deployed version hosted on own domain</Li>
            </Ul>
            <H2>Extra Features to be added later</H2>
            <Ul>
                <Li>Player currency required to purchse eggs (specific to firebase user id).</Li>
                <Li>Slot machine game to acquire currency</Li>
                <Li>Add friends and trade eggs</Li>
                <Li>Leaderboard of most eggs collected</Li>
            </Ul>
        </Container>
    )
}

export default FeaturesCard;
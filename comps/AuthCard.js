import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

import BlueButton from './BlueButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 454px;
    height: 549px;
`;

const Row = styled.div`
    display: flex;
    width: 454px;
    height: 74px;
    z-index: 1;
    position: absolute;
`;

const BigTab = styled.button`
    
`;

const SmolTab = styled.button`

`;

const Card = styled.div`
    width: 454px;
    height: 483px;
    display: flex;
    justify-content: space-evenly;
    z-index: 2;
    position: relative;
    background: linear-gradient(180deg, ${COLORS.BASE} 0%, ${COLORS.SUPERLIGHTTINT} 100%);
    box-shadow: -4px -4px 6.5368px #393F47, 4px 4px 6.5368px #1A1D21;
    border-radius: 11px;
`;

const AuthCard = () => {
    return (
        <Container>
            <Row>
                <BigTab />
                <SmolTab />
            </Row>
            <Card>
                <BlueButton />
            </Card>
        </Container>
    )
}

export default AuthCard;
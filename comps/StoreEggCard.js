import styled from 'styled-components';

import LottieAnim from './LottieAnim';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 240px;
    background-color: ${({ theme }) => theme.BASE};
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const StoreEggCard = () => {
    return (
        <Container>
            <LottieAnim 
                width="100px"
                height="100px"
            />
            <Column>
            </Column>
        </Container>
    )
}

export default StoreEggCard;
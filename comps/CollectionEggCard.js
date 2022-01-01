import styled from 'styled-components';

import LottieAnim from './LottieAnim';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    width: 200px;
    height: 190px;
    background-color: ${({ theme }) => theme.BASE};
    color: ${({ theme }) => theme.CONTENT};
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
    padding: 0 1% 0 0;
`;

const H1 = styled.p`
    font-size: 14px;
`;

const CollectionEggCard = ({
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    heading="H1 Text"
}) => {
    return (
        <Container>
            <H1>{heading}</H1>
            <LottieAnim 
                width="60px"
                height="60px"
                animation={src}
            />
        </Container>
    )
}

export default CollectionEggCard;
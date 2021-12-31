import styled from 'styled-components';

import LottieAnim from './LottieAnim';
import BlueButton from './BlueButton';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 250px;
    height: 240px;
    background-color: ${({ theme }) => theme.BASE};
    color: ${({ theme }) => theme.CONTENT};
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

const H1 = styled.p`
    font-size: 18px;
`;

const Price = styled.p`
    font-size: 14px;
`;

const StoreEggCard = ({
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    heading="H1 Text",
    price="$300"
}) => {
    return (
        <Container>
            <LottieAnim 
                width="100px"
                height="100px"
                animation={src}
            />
            <Column>
                <H1>{heading}</H1>
                <Price>{price}</Price>
                <BlueButton 
                    innerwidth="117px"
                    innerheight="37px"
                    outerwidth="119px"
                    outerheight="42px"
                    text="Buy"
                />
            </Column>
        </Container>
    )
}

export default StoreEggCard;
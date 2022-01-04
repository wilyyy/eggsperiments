import styled from 'styled-components';

import LottieAnim from './LottieAnim';

const Container = styled.div`
    width: 121px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.CONTENT};
    font-size: 13px;
`;

const FeaturedEggInfo = ({
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    heading="asdasd",
    price="$20"
}) => {
    return (
        <Container>
            <LottieAnim width="90px" height="90px" animation={src}/>
            <p>{heading}</p>
            <p>{price}</p>
        </Container>
    )
}

export default FeaturedEggInfo;
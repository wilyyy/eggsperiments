import styled from 'styled-components';
import LottieAnim from './LottieAnim';

const Container = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 362px;
    height: 241px;
    background: ${({ theme }) => theme.BASE};
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
    border-style: none;

    :hover{
        background: ${({ theme }) => theme.TINT};
        transition: 0.5s
    }

    @media (max-width: 576px){ 
        width: 254px;
        height: 161px;
    }
`;

const Text = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.CONTENT};

    @media (max-width: 576px){ 
        font-size: 14px;;
    }
`;

const DashboardCard = ({
    text="Egg Collection",
    src="",
    onButtonPress = () => {}
}) => {
    return (
        <Container onClick={onButtonPress}>
            <LottieAnim 
                width='100px' 
                height='100px'
                animation={src}
            />
            <Text>{text}</Text>
        </Container>
    )
}

export default DashboardCard;
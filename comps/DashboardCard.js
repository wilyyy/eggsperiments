import styled from 'styled-components';
import LottieAnim from './LottieAnim';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 362px;
    height: 241px;
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
`;

const Text = styled.p`
    font-size: 18px;
    color: ${({ theme }) => theme.CONTENT};
`;

const DashboardCard = ({
    text="Egg Collection",
    src=""
}) => {
    return (
        <Container>
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
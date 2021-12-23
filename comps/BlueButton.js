import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 216px;
    height: 60px;
    border-radius: 42.5px;
    border-style: none;
    background: linear-gradient(146.36deg, #0F3466 30.06%, #2159A4 76.37%);
`;

const Stroke = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 221px;
    height: 70px;
    border-radius: 42.5px;
    border-style: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    background: linear-gradient(180deg, #0861D9 0%, #09397B 79.35%);
`;

const Text = styled.p`
    font-family: "CartographCFRegular";
    font-size: 24px;
    color: ${COLORS.CONTENT};
    text-shadow: 0px 0px 8px #4583FF;
`;

const BlueButton = ({
    text="LOGIN"
}) => {
    return (
        <Stroke>
            <Container>
                <Text>{text}</Text>
            </Container>
        </Stroke>
    )
}

export default BlueButton;
import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.innerwidth};
    height: ${props=>props.innerheight};
    border-radius: 42.5px;
    border-style: none;
    background: linear-gradient(146.36deg, #0F3466 30.06%, #2159A4 76.37%);
`;

const Stroke = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.outerwidth};
    height: ${props=>props.outerheight};
    border-radius: 42.5px;
    border-style: none;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
    background: linear-gradient(180deg, #0861D9 0%, #09397B 79.35%);
    
    :hover{
        box-shadow: 0px 0px 8px #4583FF;
        transition: 1s;
    }
`;

const Text = styled.p`
    font-family: "CartographCFRegular";
    font-size: ${props=>props.textsize};
    color: ${COLORS.CONTENT};
    text-shadow: 0px 0px 8px #4583FF;
`;

const BlueButton = ({
    text="LOGIN",
    textsize="24px",
    onButtonPress = () => {},
    innerwidth="216px",
    innerheight="60px",
    outerwidth="221px",
    outerheight="70px"
}) => {
    return (
        <Stroke onClick={onButtonPress}>
            <Container
                innerwidth={innerwidth}
                innerheight={innerheight}
                outerwidth={outerwidth}
                outerheight={outerheight}
            >
                <Text textsize={textsize}>{text}</Text>
            </Container>
        </Stroke>
    )
}

export default BlueButton;
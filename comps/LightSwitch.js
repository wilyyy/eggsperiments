import styled from 'styled-components';
import Image from 'next/image'
import { useState } from "react";
import { COLORS } from '../styles/Colors';

const Container = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 54px;
    height: 110px;
    border-style: none;
    background: none;
`;

const Text = styled.p`
    font-family: "CartographCFRegular";
    text-shadow: 0px 0px 8px #4583FF;
    color: ${COLORS.CONTENT};
`;

const LightSwitch = ({
    onButtonPress=()=>{},
    text="Light Mode"
}) => {
    const [turnOn, setTurnOn] = useState(false);
    return (
        <Container>
            <Image
                src="/../public/svg/lightswitch_light.svg"
                alt="Picture of the author"
                width={32}
                height={64}
            />
            <Text>{text}</Text>
        </Container>
    )
}

export default LightSwitch;
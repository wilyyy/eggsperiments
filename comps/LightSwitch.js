import styled from 'styled-components';
import Image from 'next/image';
import { useState } from "react";
import { COLORS } from '../styles/Colors';
import lightswitch_dark from '../public/lightswitch_dark.svg';
import lightswitch_light from '../public/lightswitch_light.svg';

const Container = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 54px;
    height: 110px;
    border-style: none;
    background: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));

    &:hover .lightswitch {
        position: relative;
        bottom: 5px;
        transition: bottom 2s;
    }
`;

const Text = styled.p`
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.CONTENT};
    filter: none;
`;

const LightSwitch = ({
    onButtonPress=()=>{}
}) => {
    const [turnOn, setTurnOn] = useState(false);

    const ToggleDarkMode = () => {
        setTurnOn(!turnOn);
        onButtonPress();
    }

    return (
        <Container>
            <div className='lightswitch'>
                <Image
                    src={turnOn ? lightswitch_dark : lightswitch_light}
                    alt="Light Switch"
                    width={32}
                    height={64}
                    onClick={ToggleDarkMode}
                />
            </div>
            <Text>{turnOn ? "Dark Mode" : "Light Mode"}</Text>
        </Container>
    )
}

export default LightSwitch;
import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';

//do inset another way :(

const Inset = styled.div`
    height: 100vh;
    width: 10%;
    box-shadow: inset -4px 0px 10px rgba(39, 43, 48, 0.5);
`;
const Container = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(180deg, ${COLORS.SHADE} 0%, ${COLORS.TINT} 100%);
`;

const NavDesktop = () => {
    return (
        <Inset>
            <Container />
        </Inset>
    )
}

export default NavDesktop;
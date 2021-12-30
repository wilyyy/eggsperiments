import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';
import { RiDashboardFill } from "react-icons/ri";
import {StyledIconBase} from '@styled-icons/styled-icon';

//do inset another way :(
// use IconContext?

const Container = styled.div`
    display: flex;
    width: 91px;
    height: 100vh;
    box-shadow: inset -4px 0px 10px ${({ theme }) => theme.TINT};
    filter: drop-shadow(5px 0px 10px ${({ theme }) => theme.SHADE});
    background: linear-gradient(180deg, ${({ theme }) => theme.SHADE} 0%, ${({ theme }) => theme.TINT} 100%);
`;

const NavButton = styled.div`
    width: 22px;
    height: 22px;
    color: ${({ theme }) => theme.CONTENT};
`;

const NavDesktop = () => {
    return (
        <Container>
            <NavButton>
                <RiDashboardFill size="22px"/>
            </NavButton>
        </Container>
    )
}

export default NavDesktop;
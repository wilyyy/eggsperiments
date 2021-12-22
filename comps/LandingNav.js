import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaClipboardList } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 454px;
    height: 54px;
    background-color: ${COLORS.BASE};
    color: ${COLORS.CONTENT};
    box-shadow: -4px -4px 10px ${COLORS.TINT}, 4px 4px 10px ${COLORS.SHADE};
    border-radius: 49px;
`;

const LandingNav = () => {
    return (
        <Container>  
            <p>Home</p>
            <p>Info</p>
            <p>Features</p>
            <AiFillHome />
            <BsFillInfoCircleFill />
            <FaClipboardList />
        </Container>
    )
}

export default LandingNav;
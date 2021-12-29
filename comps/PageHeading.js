import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';

const Text = styled.p`
    color: ${COLORS.CONTENT};
    font-size: 37px;
    font-family: "MBFNanomaton";
`;

const PageHeading = ({
    text="Dashboard"
}) => {
    return (
        <Text>{text}</Text>
    )
}

export default PageHeading;
import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';

import NavDesktop from '../comps/NavDesktop';

const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;
`;

const Collection = () => {
    return (
        <Page>
            <NavDesktop />
            <PageCard />
        </Page>
    )
}

export default Collection;
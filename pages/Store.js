import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';

import NavDesktop from '../comps/NavDesktop';
import StoreEggCard from '../comps/StoreEggCard';

const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;
`;

const Store = () => {
    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <StoreEggCard />
            </PageCard>
        </Page>
    )
}

export default Store;
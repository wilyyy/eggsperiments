import styled from 'styled-components';
import { useState } from "react";
import { COLORS } from '../styles/Colors';

// add drop shadow on nav instead of doing it like this?

import NavDesktop from '../comps/NavDesktop';
import PageHeading from '../comps/PageHeading';

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
    background: linear-gradient(90deg, #0E0F11 -2%, #1A1D21 1.47%, #1A1D21 93.36%);
    padding: 0 5%;
`;

const Dashboard = () => {
    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Welcome, User!"/>
            </PageCard>
        </Page>
    )
}

export default Dashboard;
import styled from 'styled-components';
import { useState, useEffect } from "react";
import { COLORS } from '../styles/Colors';
import axios from 'axios';

import NavDesktop from '../comps/NavDesktop';
import StoreEggCard from '../comps/StoreEggCard';
import { ShopItems } from '../public/EggData';
import PageHeading from '../comps/PageHeading';

const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;
`;

const CardWrapper = styled.div`
    margin-bottom: 10px;
`;

const Store = () => {
    const [eggCard, seteggCard] = useState(ShopItems);

    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Store"/>
                {
                    eggCard.map((o, i) => (
                        <CardWrapper key={i}>
                            <StoreEggCard
                                heading={o.name}
                                src={o.src}
                                price={o.price}
                            />
                        </CardWrapper>
                    )
                    )
                }
            </PageCard>
        </Page>
    )
}

export default Store;
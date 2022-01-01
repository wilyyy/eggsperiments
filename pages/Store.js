import styled from 'styled-components';
import { useState, useEffect } from "react";
import { COLORS } from '../styles/Colors';
import axios from 'axios';

//pls fix deploy :((


//commit 
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
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;
    /* padding: 0 0 0 2%; */
`;

const StoreItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
    align-items: center;
`;

const CardWrapper = styled.div`
    margin: 0 2rem;
`;

const Store = () => {
    const [eggCard, seteggCard] = useState(ShopItems);

    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Store"/>
                <StoreItems>
                    {
                        eggCard.map(
                            (o, i) => (
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
                </StoreItems>
            </PageCard>
        </Page>
    )
}

export default Store;
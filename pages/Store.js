import styled from 'styled-components';
import { useState } from "react";

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
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;
`;

const CardWrapper = styled.div`
    margin: 0 2rem;
`;

const Store = () => {
    const [eggCard, setEggCard] = useState(ShopItems);

    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Store" />
                <Items>
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
                </Items>
            </PageCard>
        </Page>
    )
}

export default Store;
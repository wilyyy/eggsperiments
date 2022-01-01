import styled from 'styled-components';
import { useState } from "react";

import NavDesktop from '../comps/NavDesktop';
import CollectionEggCard from '../comps/CollectionEggCard';
import PageHeading from '../comps/PageHeading';
import { CollectionItems } from '../public/EggData';


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

const Collection = () => {
    const [eggCard, setEggCard] = useState(CollectionItems);
    return (
        <Page>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Your Collection" />
                <Items>
                    {
                        eggCard.map(
                            (o, i) => (
                                <CardWrapper key={i}>
                                    <CollectionEggCard
                                        heading={o.name}
                                        src={o.src}
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

export default Collection;
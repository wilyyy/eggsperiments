import styled from 'styled-components';
import { useState } from "react";

import NavDesktop from '../comps/NavDesktop';
import NavMobile from '../comps/NavMobile';
import CollectionEggCard from '../comps/CollectionEggCard';
import PageHeading from '../comps/PageHeading';
import { CollectionItems } from '../public/EggData';


const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;

    @media (max-width: 576px){ 
        height: auto;
    }
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;

    @media (max-width: 576px){ 
        width: 100%;
        height: 100%;
    }

    @media (max-width: 576px){ 
        width: 100%;
        height: 100%;
        align-items: center;
    }
`;

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 80%;

    @media (max-width: 576px){ 
        margin: 2rem 0;
        justify-content: center;
    }
    
`;

const CardWrapper = styled.div`
    margin: 0 2rem;

    @media (max-width: 576px){ 
        margin: 2rem 0;
    }
`;

const MobileNavCont = styled.div`
    display: none;

    @media (max-width: 576px){ 
        display: flex;
        position: absolute;
        z-index: 100;
    }
`;

const Collection = () => {
    const [eggCard, setEggCard] = useState(CollectionItems);
    return (
        <Page>
            <MobileNavCont>
                <NavMobile />
            </MobileNavCont>
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
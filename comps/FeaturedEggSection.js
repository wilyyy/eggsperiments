import styled from 'styled-components';
import { useState } from "react";
import { useRouter } from 'next/router';

import BlueButton from './BlueButton';
import FeaturedEggInfo from './FeaturedEggInfo';
import { ShopItems } from '../public/EggData';

const Container = styled.div`
    width: 821px;
    height: 310px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.CONTENT};
    overflow: hidden;

    @media (max-width: 576px){ 
        width: 351px;
        height: 295px;
    }
`;

const Row = styled.div`
    width: auto;
    height: 36px;
    display: flex;
    justify-content: space-between;
`;

const InnerCont = styled.div`
    display: flex;
    width: auto;
    height: 256px;
    background-color: ${({ theme }) => theme.SHADE};
    align-items: center;
    border-radius: 13px;
    box-shadow: inset -2.17893px -2.17893px 6.5368px ${({ theme }) => theme.INPUTTINT}, inset 2.17893px 2.17893px 6.5368px ${({ theme }) => theme.INPUTSHADE};
    overflow-x: scroll;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.SUPERSHADE};
        box-shadow: inset -2.17893px -2.17893px 6.5368px ${({ theme }) => theme.INPUTTINT}, inset 2.17893px 2.17893px 6.5368px ${({ theme }) => theme.INPUTSHADE}; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.TINT}; 
    }

    ::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.SUPERLIGHTTINT};
    }

    @media (max-width: 576px){ 
        width: 351px;
        height: 255px;
    }
`;

const CardWrapper = styled.div`
    margin: 0 2rem;
`;

const WebBlueButton = styled.div`
    @media (max-width: 576px){ 
        display: none;
    }
`;

const MobileBlueButton = styled.div`
    display: none;
    @media (max-width: 576px){ 
        display: flex;
        position: relative;
        top: 10px;
    }
`;

const FeaturedEggSection = () => {
    const router = useRouter();
    // const [eggs, setEggs] = useState(ShopItems);
    
    return (
        <Container>
            <Row>
                <p>Featured Eggs</p>
                <WebBlueButton>
                    <BlueButton 
                        innerwidth='163px'
                        innerheight='36px'
                        outerwidth='168px'
                        outerheight='41px'
                        text="View All"
                        textsize="16px"
                        onButtonPress={()=>{router.push('/Store')}}
                    />
                </WebBlueButton>
                <MobileBlueButton>
                    <BlueButton 
                        innerwidth='102px'
                        innerheight='18px'
                        outerwidth='107px'
                        outerheight='23px'
                        text="View All"
                        textsize="11px"
                        onButtonPress={()=>{router.push('/Store')}}
                    />
                </MobileBlueButton>
            </Row>
            <InnerCont>
                {
                    ShopItems.map(
                        (o, i) => (
                            <CardWrapper key={i}>
                                <FeaturedEggInfo
                                    heading={o.name}
                                    src={o.src}
                                    price={o.price}
                                />
                            </CardWrapper>
                        )   
                    )
                }
            </InnerCont>
        </Container>
    )
}

export default FeaturedEggSection;
import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useState } from "react";
import { Home } from '@styled-icons/boxicons-solid/Home';
import { InfoCircleFill } from '@styled-icons/bootstrap/InfoCircleFill';
import { ClipboardList } from '@styled-icons/fa-solid/ClipboardList';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 454px;
    height: 54px;
    background-color: ${COLORS.BASE};
    color: ${COLORS.CONTENT};
    box-shadow: -4px -4px 10px ${COLORS.TINT}, 4px 4px 10px ${COLORS.SHADE};
    border-radius: 49px;
`;

const Selected = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props=>props.selectWidth};
    height: 23px;
    background-color: ${COLORS.BASE};
    box-shadow: inset -2.17893px -2.17893px 6.5368px ${COLORS.TINT}, inset 2.17893px 2.17893px 6.5368px ${COLORS.SHADE};
    border-radius: 21px;
`;

const Row = styled.button`
    width: ${props=>props.width};
    height: 20px;
    display: flex;
    background: none;
    border-style: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${COLORS.CONTENT};
    text-shadow: 0px 0px 8px #4583FF;
    font-family: "CartographCFRegular";
`;

const HomeIcon = styled(Home)`
    color: ${COLORS.CONTENT};
    width: 16px;
    height: 16px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const AboutIcon = styled(InfoCircleFill)`
    color: ${COLORS.CONTENT};
    width: 16px;
    height: 16px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const FeaturesIcon = styled(ClipboardList)`
    color: ${COLORS.CONTENT};
    width: 16px;
    height: 16px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const LandingNav = ({
    onHomePress=()=>{},
    onAboutPress=()=>{},
    onFeaturesPress=()=>{}
}) => {
    const [selectHome, setSelectHome] = useState(true);
    const [selectAbout, setSelectAbout] = useState(false);
    const [selectFeatures, setSelectFeatures] = useState(false);

    const ClickHome = () => {
        setSelectHome(true);
        setSelectAbout(false);
        setSelectFeatures(false);
        onHomePress();
    }
    
    const ClickAbout = () => {
        setSelectAbout(true);
        setSelectHome(false);
        setSelectFeatures(false);
        onAboutPress();
    }

    const ClickFeatures = () => {
        setSelectFeatures(true);
        setSelectHome(false);
        setSelectAbout(false);
        onFeaturesPress();
    }

    return (
        <Container>
            {selectHome === true && 
                <Selected selectWidth="103px">
                    <Row width="70px">
                        <HomeIcon />
                        <p>Home</p>
                    </Row>
                </Selected>
            }
            {selectHome === false && 
                <HomeIcon onClick={ClickHome} />
            }

            {selectAbout === true && 
                <Selected selectWidth="113px">
                    <Row width="80px">
                        <AboutIcon />
                        <p>About</p>
                    </Row>
                </Selected>
            }
            {selectAbout === false && 
                <AboutIcon onClick={ClickAbout} />
            }
            
            {selectFeatures === true && 
                <Selected selectWidth="123px">
                    <Row width="100px">
                        <FeaturesIcon />
                        <p>Features</p>
                    </Row>
                </Selected>
            }
            {selectFeatures === false && 
                <FeaturesIcon onClick={ClickFeatures} />
            }
        </Container>
    )
}

export default LandingNav;
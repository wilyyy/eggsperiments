import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

const Container = styled.button`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 300px;
    min-height: 66px;
    border-radius: 20px;
    background-color: ${COLORS.BASE};
    box-shadow: -2.17893px -2.17893px 6.5368px ${COLORS.TINT}, 2.17893px 2.17893px 6.5368px ${COLORS.SHADE};
    border-style: none;
    color: #fff;

    :active {
        box-shadow: inset -2.17893px -2.17893px 6.5368px ${COLORS.TINT}, inset 2.17893px 2.17893px 6.5368px ${COLORS.SHADE};;
        color: red;
    }
`;

const Button = styled.button``;

const LandingTab = ({
    onHomePress = () => {},
    onAboutPress = () => {}
}) => {
    return (
        <Container onClick={onHomePress} className='active'>
            Collect this egg
            {/* <button>this looks so bad lol</button>
            <button>this looks so bad lol</button> */}
        </Container>
    )
}

export default LandingTab;
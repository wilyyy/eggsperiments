import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Container = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ScrambledEgg = ({
    animation = "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
}) => {
    return (
        <Player
            autoplay
            loop
            src={animation}
            style={{ height: '300px', width: '300px' }}
        />
    )
}

export default ScrambledEgg;
import styled from 'styled-components';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Container = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LottieAnim = ({
    animation = "https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json",
    height = '300px',
    width = '300px'
}) => {
    return (
        <Container 
            height={height}
            width={width}
        >
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: {height}, width: {width} }}
            />
        </Container>
    )
}

export default LottieAnim;
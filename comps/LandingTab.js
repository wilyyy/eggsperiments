import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    min-width: 300px;
    min-height: 66px;
    border-radius: 20px;
    background-color: #1A1D21;
    box-shadow: -2.17893px -2.17893px 6.5368px #2B3036, 2.17893px 2.17893px 6.5368px #101214;
    border-style: none;
`;

const Button = styled.button``;

const LandingTab = ({
    onHomePress = () => {},
    onAboutPress = () => {}
}) => {
    return (
        <Container>
            <button>this looks so bad lol</button>
            <button>this looks so bad lol</button>
        </Container>
    )
}

export default LandingTab;
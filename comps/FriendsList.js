import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 274px;
    height: 589px;
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.CONTENT};
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 274px;
    height: 87px;
    border-radius: 11px 11px 0px 0px;
    box-shadow: -4px -4px 10px ${({ theme }) => theme.TINT}, 4px 4px 10px ${({ theme }) => theme.SHADE};
`;

const List = styled.div`
    width: 274px;
    height: 502px;
    box-shadow: inset -2.17893px -2.17893px 6.5368px ${({ theme }) => theme.INPUTTINT}, inset 2.17893px 2.17893px 6.5368px ${({ theme }) => theme.INPUTSHADE};
    background-color: ${({ theme }) => theme.SHADE};
`;

const FriendsList = () => {
    const text = "Friends (0/0)"
    return (
        <Container>
            <Header>{text}</Header>
            <List />
        </Container>
    )
}

export default FriendsList;
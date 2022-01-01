import styled from 'styled-components';

const Text = styled.p`
    color: ${({ theme }) => theme.CONTENT};
    font-size: 37px;
    font-family: "MBFNanomaton";
`;

const PageHeading = ({
    text="Dashboard"
}) => {
    return (
        <Text>{text}</Text>
    )
}

export default PageHeading;
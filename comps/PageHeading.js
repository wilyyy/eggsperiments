import styled from 'styled-components';

const Text = styled.p`
    color: ${({ theme }) => theme.CONTENT};
    font-size: 37px;
    font-family: "MBFNanomaton";

    @media (max-width: 576px){ 
        font-size: 28px;
    }
`;

const PageHeading = ({
    text="Dashboard"
}) => {
    return (
        <Text>{text}</Text>
    )
}

export default PageHeading;
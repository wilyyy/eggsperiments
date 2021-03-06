import styled from 'styled-components';
import { useRouter } from 'next/router';

import BlueButton from './BlueButton';

const Card = styled.div`
    width: 454px;
    height: 483px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    background: linear-gradient(180deg, ${({ theme }) => theme.BASE} 0%, ${({ theme }) => theme.SUPERLIGHTTINT} 100%);
    box-shadow: -4px -4px 6.5368px ${({ theme }) => theme.SUPERLIGHTTINT}, 4px 4px 6.5368px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    z-index: 1;

    @media (max-width: 576px){ 
        width: 274px;
        height: 389px;
        margin-bottom: 20%;
    }
`;

const Input = styled.input`
    border-style: none;
    width: 256px;
    height: 63px;
    background-color: ${({ theme }) => theme.SHADE};
    box-shadow: inset -2.17893px -2.17893px 6.5368px ${({ theme }) => theme.INPUTTINT}, inset 2.17893px 2.17893px 6.5368px ${({ theme }) => theme.INPUTSHADE};
    border-radius: 11px;
    font-family: "CartographCFRegular";
    color: ${({ theme }) => theme.PLACEHOLDER};
    padding: 5%;

    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.PLACEHOLDER};
    }
    :-ms-input-placeholder {
        color: ${({ theme }) => theme.PLACEHOLDER};
    }
    
    :focus{
        background-color: ${({ theme }) => theme.INPUTACTIVE};
        outline: none;
        transition: 1s;
    }

    @media (max-width: 576px){ 
        width: 178px;
        height: 52px;
    }
`;

const AuthCard = () => {
    const router = useRouter();
    const RouteToLoading = () => {
        router.push('/Loading');
    }
    return (
        <Card>
            <Input placeholder="E-mail" type="email" />
            <Input placeholder="Password" type="password" />
            <BlueButton onButtonPress={RouteToLoading}/>
        </Card>

    )
}

export default AuthCard;
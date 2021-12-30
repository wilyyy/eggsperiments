import styled from 'styled-components';
import { COLORS } from '../styles/Colors';
import { useRouter } from 'next/router';

import BlueButton from './BlueButton';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 454px;
    height: 549px;
`;

// const Row = styled.div`
//     display: flex;
//     width: 454px;
//     height: 74px;
// `;

// const BigTab = styled.button`
//     position: relative;
//     top: 2px;
//     width: 227px;
//     height: 74px;
//     border-style: none;
//     background-color: ${COLORS.BASE};
//     box-shadow: -4px -4px 6.5368px #393F47, 4px 4px 6.5368px #1A1D21;
//     z-index: 1;
//     border-top-left-radius: 11px;
//     border-top-right-radius: 11px;
// `;

// const SmolTab = styled.button`
//     position: relative;
//     top: 10px;
//     width: 227px;
//     height: 74px;
//     border-style: none;
//     background-color: ${COLORS.SUPERSHADE};
//     z-index: 0;
//     border-top-left-radius: 11px;
//     border-top-right-radius: 11px;
//     box-shadow: -4px -4px 6.5368px #393F47, 4px 4px 6.5368px #1A1D21;
// `;

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
`;

const AuthCard = () => {
    const router = useRouter();
    const RouteToLoading = () => {
        router.push('/Loading');
    }
    return (
        <Container>
            {/* <Row>
                <BigTab />
                <SmolTab />
            </Row> */}
            <Card>
                <Input placeholder="E-mail" type="email" />
                <Input placeholder="Password" type="password" />
                <BlueButton onButtonPress={RouteToLoading}/>
            </Card>
        </Container>
    )
}

export default AuthCard;
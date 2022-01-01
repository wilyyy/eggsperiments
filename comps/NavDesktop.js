import styled from 'styled-components';
import { Dashboard } from '@styled-icons/material-rounded/Dashboard';
import { ShoppingCart } from '@styled-icons/entypo/ShoppingCart';
import { ShoppingBasket } from '@styled-icons/fa-solid/ShoppingBasket';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { LogOut } from '@styled-icons/entypo/LogOut';
import { useRouter } from 'next/router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 91px;
    height: 100vh;
    box-shadow: inset -4px 0px 10px ${({ theme }) => theme.TINT};
    filter: drop-shadow(5px 0px 10px ${({ theme }) => theme.SHADE});
    background: linear-gradient(180deg, ${({ theme }) => theme.SHADE} 0%, ${({ theme }) => theme.TINT} 100%);
`;

const TopCol = styled.div`
    width: 44px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

const Spacer = styled.div`
    width: auto;
    height: 25%;
`;

const DashboardIcon = styled(Dashboard)`
    color: ${({ theme }) => theme.CONTENT};
    width: 30px;
    height: 30px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const StoreIcon = styled(ShoppingCart)`
    color: ${({ theme }) => theme.CONTENT};
    width: 30px;
    height: 30px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const CollectionIcon = styled(ShoppingBasket)`
    color: ${({ theme }) => theme.CONTENT};
    width: 30px;
    height: 30px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const ProfileIcon = styled(PersonFill)`
    color: ${({ theme }) => theme.CONTENT};
    width: 30px;
    height: 30px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const LogOutIcon = styled(LogOut)`
    color: ${({ theme }) => theme.CONTENT};
    width: 30px;
    height: 30px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const NavDesktop = () => {
    const router = useRouter();
    return (
        <Container>
            <TopCol>
                <DashboardIcon onClick={()=>{router.push('/Dashboard')}}/>
                <StoreIcon onClick={()=>{router.push('/Store')}}/>
                <CollectionIcon onClick={()=>{router.push('/Collection')}}/>
                <ProfileIcon onClick={()=>{router.push('/Profile')}}/>
            </TopCol>
            <Spacer />
            <LogOutIcon onClick={()=>{router.push('/')}}/>
        </Container>
    )
}

export default NavDesktop;
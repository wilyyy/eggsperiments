import styled from 'styled-components';
import { useState } from "react";
import { Menu } from '@styled-icons/evaicons-solid/Menu';
import { Dashboard } from '@styled-icons/material-rounded/Dashboard';
import { ShoppingCart } from '@styled-icons/entypo/ShoppingCart';
import { ShoppingBasket } from '@styled-icons/fa-solid/ShoppingBasket';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';
import { LogOut } from '@styled-icons/entypo/LogOut';
import { useRouter } from 'next/router';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    color: ${({ theme }) => theme.CONTENT};
    background-color: ${({ theme }) => theme.SHADE};
    width: 100vw;
    height: 100vh;
    font-family: "CartographCFRegular";
    font-size: 36px;
`;

const MenuIcon = styled(Menu)`
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const CloseIcon = styled(CloseOutline)`
    display: flex;
    position: absolute;
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
    top: 0;
    left: 0;
`;

const NavRow = styled.a`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
`;

const DashboardIcon = styled(Dashboard)`
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const StoreIcon = styled(ShoppingCart)`
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const CollectionIcon = styled(ShoppingBasket)`
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const LogOutIcon = styled(LogOut)`
    color: ${({ theme }) => theme.CONTENT};
    width: 40px;
    height: 40px;
    text-shadow: 0px 0px 8px #4583FF;
`;

const NavMobile = () => {
    const router = useRouter();
    const [menu, setMenu] = useState(false);

    const GoToDashboard = () => {
        setMenu(false);
        router.push('/Dashboard');
    }

    const GoToStore = () => {
        setMenu(false);
        router.push('/Store');
    }

    const GoToCollection = () => {
        setMenu(false);
        router.push('/Collection');
    }

    const LogOutApp = () => {
        setMenu(false);
        router.push('/');
    }

    return (
        <>
            {menu === false && 
                <MenuIcon onClick={()=>{setMenu(true)}}/>
            }
            
            {menu === true && 
                <Container>
                    <CloseIcon onClick={()=>{setMenu(false)}}/>
                    <NavRow onClick={GoToDashboard}>
                        <DashboardIcon />
                        <a>Dashboard</a>
                    </NavRow>
                    <NavRow onClick={GoToStore}>
                        <StoreIcon />
                        <a>Store</a>
                    </NavRow>
                    <NavRow onClick={GoToCollection}>
                        <CollectionIcon />
                        <a>Collection</a>
                    </NavRow>
                    <NavRow onClick={LogOutApp}>
                        <LogOutIcon />
                        <a>Log Out</a>
                    </NavRow>
                </Container>      
            }
        </>
    )
}

export default NavMobile;
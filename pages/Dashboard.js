import styled from 'styled-components';
import { useRouter } from 'next/router';

import NavDesktop from '../comps/NavDesktop';
import NavMobile from '../comps/NavMobile';
import PageHeading from '../comps/PageHeading';
import FeaturedEggSection from '../comps/FeaturedEggSection';
import DashboardCard from '../comps/DashboardCard';
import FriendsList from '../comps/FriendsList';

const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};

    @media (max-width: 576px){
        height: auto;
        justify-content: center;
        padding: 1rem 0;
    }
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    background: ${({ theme }) => theme.BASE};
    padding: 0 8% 0 2%;

    @media (max-width: 576px){ 
        width: 80%;
        height: 100%;
        align-items: center;
    }
`;

const RowOutside = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    height: 589px;

    @media (max-width: 576px){ 
        flex-direction: column;
        height: 100%;
        align-items: center;
    }
`;

const RowInside = styled.div`
    display: flex;
    width: auto;
    height: auto;
    justify-content: space-between;

    @media (max-width: 576px){ 
        flex-direction: column;
        align-items: center;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 821px;
    height: 589px;

    @media (max-width: 576px){ 
        width: auto;
        height: auto;
    }
`;

const MobileNavCont = styled.div`
    display: none;

    @media (max-width: 576px){ 
        display: flex;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 100;
    }
`;

const Spacer = styled.div`
    @media (max-width: 576px){ 
        margin: 1rem 0;
    }
`;

const Dashboard = () => {
    const router = useRouter();
    return (
        <Page>
            <MobileNavCont>
                <NavMobile />
            </MobileNavCont>
            <NavDesktop />
            <PageCard>
                <PageHeading text="Welcome, User!"/>
                <RowOutside>
                    <Column>
                        <FeaturedEggSection />
                        <Spacer />
                        <RowInside>
                            <DashboardCard 
                                src="https://assets4.lottiefiles.com/packages/lf20_bh8q8hds.json"
                                onButtonPress={()=>{router.push('/Collection')}}
                            />
                            <Spacer />
                            <DashboardCard 
                                text="Leaderboard"
                                src="https://assets3.lottiefiles.com/packages/lf20_qzexyedo.json"
                            />
                        </RowInside>
                    </Column>
                    <Spacer />
                    <FriendsList />
                </RowOutside>
            </PageCard>
        </Page>
    )
}

export default Dashboard;
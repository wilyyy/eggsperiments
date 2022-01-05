import styled from 'styled-components';

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
    
    @media (max-width: 576px){ 
        flex-direction: column;
    }
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 8% 0 2%;
`;

const RowOutside = styled.div`
    display: flex;
    justify-content: space-between;
    width: auto;
    height: 589px;

    @media (max-width: 576px){ 
        flex-direction: column;
    }
`;

const RowInside = styled.div`
    display: flex;
    width: auto;
    height: auto;
    justify-content: space-between;

    @media (max-width: 576px){ 
        flex-direction: column;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 821px;
    height: 589px;
`;

const MobileNavCont = styled.div`
    display: none;

    @media (max-width: 576px){ 
        display: flex;
        position: absolute;
        z-index: 100;
    }
`;

const Dashboard = () => {
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
                        <RowInside>
                            <DashboardCard 
                                src="https://assets4.lottiefiles.com/packages/lf20_bh8q8hds.json"
                            />
                            <DashboardCard 
                                text="Leaderboard"
                                src="https://assets3.lottiefiles.com/packages/lf20_qzexyedo.json"
                            />
                        </RowInside>
                    </Column>
                    <FriendsList />
                </RowOutside>
            </PageCard>
        </Page>
    )
}

export default Dashboard;
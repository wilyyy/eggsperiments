import styled from 'styled-components';

import NavDesktop from '../comps/NavDesktop';
import PageHeading from '../comps/PageHeading';
import FeaturedEggSection from '../comps/FeaturedEggSection';
import DashboardCard from '../comps/DashboardCard';
import FriendsList from '../comps/FriendsList';

const Page = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`;

const PageCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: ${({ theme }) => theme.BASE};
    padding: 0 0 0 2%;
`;

const RowOutside = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1206px;
    height: 589px;
`;

const RowInside = styled.div`
    display: flex;
    width: auto;
    height: auto;
    justify-content: space-between;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 821px;
    height: 589px;
`;

const Dashboard = () => {
    return (
        <Page>
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
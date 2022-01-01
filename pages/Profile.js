import styled from 'styled-components';

import NavDesktop from '../comps/NavDesktop';

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
    color: ${({ theme }) => theme.CONTENT};
    padding: 0 0 0 2%;
`;

const Profile = () => {
    return (
        <Page>
            <NavDesktop />
            <PageCard>Profile not mvp</PageCard>
        </Page>
    )
}

export default Profile;
import styled from 'styled-components';
import { COLORS } from '../styles/Colors';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 690px;
    height: 231px;
    background: linear-gradient(180deg, #2A2F35 0%, #2E333A 100%);
    box-shadow: -4px -4px 6.5368px #393F47, 4px 4px 6.5368px #1A1D21;
    border-radius: 11px;
    padding: 5% 3% 8% 3%;
    font-family: "CartographCFRegular";
    font-size: 14px;
    color: ${COLORS.CONTENT};

`;

const AboutCard = () => {
    return (
        <Container>
            <p>
                Eggsperiments is a winter break experimental project created by myself, William Laurel Alvarez. 
                It is meant as a practice ground for applying my knowledge I've learned during my stay in the Digital Design & Development 
                program at BCIT. I will also be using this project to test technologies outside of school to supplement my learning. 
                The whole premise of the application is to collect eggs and that's basically it. 🤠
            </p>
        </Container>
    )
}

export default AboutCard;
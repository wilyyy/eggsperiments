import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 690px;
    height: 231px;
    background: linear-gradient(180deg, ${({ theme }) => theme.BASE} 0%, ${({ theme }) => theme.SUPERLIGHTTINT} 100%);
    box-shadow: -4px -4px 6.5368px ${({ theme }) => theme.SUPERLIGHTTINT}, 4px 4px 6.5368px ${({ theme }) => theme.SHADE};
    border-radius: 11px;
    padding: 5% 3% 8% 3%;
    font-family: "CartographCFRegular";
    font-size: 14px;
    color: ${({ theme }) => theme.CONTENT};

    &:hover .link {
        text-shadow: 0px 0px 7px ${({ theme }) => theme.CONTENT};
        transition: 0.5s;
    }

    @media (max-width: 576px){ 
        width: 274px;
        height: 389px;
        font-size: 14px;
        text-align: center;

        .link {
            text-shadow: 0px 0px 7px ${({ theme }) => theme.CONTENT};
            transition: 0.5s;
            text-decoration: underline;
        }
    }
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
            <a 
                href="https://github.com/wilyyy/eggsperiments" 
                target="_blank"
                className='link'
            >
                Click here to view source code on Github 🚀
            </a>
        </Container>
    )
}

export default AboutCard;
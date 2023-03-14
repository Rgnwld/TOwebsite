import React from 'react';
import styled from 'styled-components';
import MainSVG from './images/scene/TOwithWheelingChair.svg';

const Colors = {
    main: '#0D6B3C',
    mainLight: '#BED6CA',
    light: '#f9f9f9',
    dark: '#363636',
};

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${Colors.light};
    min-height: 100vh;
`;

function App() {
    return (
        <AppContainer>
            <HeaderComponent />
            <Section01 />
            <SectionsComponents />
            <FooterComponent />
        </AppContainer>
    );
}

//#region Header
function HeaderComponent() {
    return (
        <Header>
            <MobileFirst>
                <HTopContent>
                    <HMainArea>
                        <HMTitle>Harumy Yamamoto</HMTitle>
                        <HMSubTitle>Terapeuta Ocupacional</HMSubTitle>
                    </HMainArea>
                    <HButtonArea>
                        <SecondaryButton>Mais Informações</SecondaryButton>
                        <PrimaryButton>Contato</PrimaryButton>
                    </HButtonArea>
                </HTopContent>
                <HBottomContent>
                    <NavItem href="#">Inicio</NavItem>
                    <NavItem href="#">Serviço</NavItem>
                    <NavItem href="#">Planos</NavItem>
                </HBottomContent>
            </MobileFirst>
        </Header>
    );
}

const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    background-color: ${Colors.light};
    color: ${Colors.main};
`;

const HTopContent = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.mainLight};

    padding: 0.5rem 0;
`;

const HBottomContent = styled.div`
    display: flex;
`;

const HMainArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HMTitle = styled.h1`
    color: ${Colors.main};
    font-family: 'League Spartan', sans-serif;
    margin: 0;
    padding: 0;
`;

const HMSubTitle = styled.h2`
    color: ${Colors.main};
    font-family: 'League Spartan', sans-serif;
    margin: 0;
    padding: 0;
    font-weight: 400;
`;

const HButtonArea = styled.div`
    display: flex;
`;

const NavItem = styled.a`
    display: flex;
    color: ${Colors.dark};
    text-decoration: none;
    padding: 0.75rem 1rem;
    margin: 0 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    font-family: 'League Spartan', sans-serif;
    border-bottom: solid 4px transparent;

    transition: all 0.2s ease;

    &:hover {
        border-bottom: solid 4px ${Colors.main};
    }
`;
//#endregion

//#region Footer
function FooterComponent() {
    return (
        <Footer>
            <Copyright>©2023 / YAMAMOTO HARUMY</Copyright>
        </Footer>
    );
}

const Footer = styled.footer`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: auto;
`;

const Copyright = styled.span`
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
    background-color: ${Colors.main};
    padding: 1rem;
    color: ${Colors.light};
    font-family: 'League Spartan', sans-serif;
`;

//#endregion

//#region Sections
const SectionsComponents: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <Sections>
            <MobileFirst>{children}</MobileFirst>
        </Sections>
    );
};

const Sections = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 540px;
    &:nth-child(even) {
        background-color: ${Colors.mainLight};
    }
    &:nth-child(odd) {
        background-color: ${Colors.light};
    }
`;

//#region Section 01
function Section01() {
    return (
        <SectionsComponents>
            <S1Container>
                <S1LeftSide>
                    <S1Title>
                        Transformando <strong>vidas</strong>, uma <strong>atividade</strong> de cada vez.
                    </S1Title>
                    <S1SubTitle>
                        Trabalhamos com pessoas <u>idosas</u> que precisam de ajuda para realizar suas atividades
                        diárias. Avaliaremos as habilidades e dificuldades de uma pessoa e, em seguida, criaremos um
                        plano de tratamento personalizado para ajudá-los a alcançar suas metas.
                    </S1SubTitle>
                    <S1ButtonContainer>
                        <PrimaryButton>Faça uma avaliação</PrimaryButton>
                        <SecondaryButton>Contato</SecondaryButton>
                    </S1ButtonContainer>
                </S1LeftSide>
                <S1RightSide>
                    <img src={MainSVG}></img>
                </S1RightSide>
            </S1Container>
        </SectionsComponents>
    );
}

const S1Container = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
`;

const S1LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;
const S1RightSide = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const S1Title = styled.h1`
    color: ${Colors.main};
    font-family: 'League Spartan';
    font-weight: 400;
    font-size: 3rem;
    margin: 0;
    padding: 0;
`;

const S1SubTitle = styled.h3`
    font-family: 'Inter';
    font-weight: 400;
    text-align: justify;
    text-indent: 3rem;
    font-size: 1rem;

    color: ${Colors.dark};
`;

const S1ButtonContainer = styled.div`
    display: flex;
`;

//#endregion
//#endregion

//#region GlobalComponents
const MobileFirst = styled.div`
    width: 1000px;
`;

const PrimaryButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    margin: 0.5rem;

    background-color: ${Colors.main};
    color: ${Colors.light};

    border-radius: 2rem;

    border: ${Colors.main} solid 1px;
    font-family: 'League Spartan', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    min-width: 8rem;

    cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
    color: ${Colors.main};
    background-color: transparent;
`;
//#endregion

export default App;

import React from 'react';
import styled from 'styled-components';
import MainSVG from './images/scene/TOwithWheelingChair.svg';
import AtvSVG from './images/scene/Frame 24.svg';
import ModSVG from './images/scene/Frame 20.svg';
import AdpSVG from './images/scene/Frame 22.svg';
import TreinSVG from './images/scene/Frame 21.svg';
import TerSVG from './images/scene/Frame 23.svg';

import EmailSVG from './images/scene/Email.svg';
import PhoneSVG from './images/scene/Phone.svg';

import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import MapComponent from './MapComponent';

const Colors = {
    main: '#0D6B3C',
    mainLight: '#BED6CA',
    mainLighter: '#EDF1EF',
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
            <Section02 />
            <Section03 />
            <Section04 />
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
                    <NavItem href="#Inicio">Inicio</NavItem>
                    <NavItem href="#Serviços">Serviço</NavItem>
                    <NavItem href="#Planos">Planos</NavItem>
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
    max-width: 100%;

    background-color: ${Colors.light};
    color: ${Colors.main};
`;

const HTopContent = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${Colors.mainLight};
    padding: 0.5rem 0;

    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
    }
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
    @media (max-width: 1000px) {
        display: none;
    }
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
        background-color: ${Colors.mainLighter};
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
    justify-content: center;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    height: 100%;
    @media (max-width: 1000px) {
        display: flex;
        max-width: 50rem;
        padding: 2rem;
    }
`;

const S1LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;
const S1RightSide = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
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
//#region Section 02
function Section02() {
    return (
        <SectionsComponents>
            <S2Container id="Serviços">
                <S2Title>Principais Serviços</S2Title>
                <GridTemplate>
                    <ImgContainer>
                        <SvgImg src={AtvSVG} />
                        Atividades de reabilitação
                    </ImgContainer>
                    <ImgContainer>
                        <SvgImg src={ModSVG} />
                        Modificações do ambiente
                    </ImgContainer>
                    <ImgContainer>
                        <SvgImg src={AdpSVG} />
                        Adaptações de dispositivos
                    </ImgContainer>
                    <ImgContainer>
                        <SvgImg src={TreinSVG} />
                        Treinamento de habilidades de vida
                    </ImgContainer>
                    <ImgContainer>
                        <SvgImg src={TerSVG} />
                        Terapia cognitiva
                    </ImgContainer>
                </GridTemplate>
            </S2Container>
        </SectionsComponents>
    );
}

const S2Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    padding: 3rem 0;
`;

const S2Title = styled.h1`
    justify-self: flex-start;
    padding: 0%;
    margin: 0%;
    font-size: 2.25rem;
    font-family: 'League Spartan';
    color: ${Colors.main};
`;

const GridTemplate = styled.div`
    display: flex;
    flex-flow: wrap row;
    /* flex: 0 1; */
    width: 80%;
    height: 100%;
    justify-content: center;
    align-items: center;

    gap: 3rem;
`;

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'League Spartan';
    font-size: 1.1rem;
    font-weight: 700;
    color: ${Colors.dark};
`;

const SvgImg = styled.img`
    height: 10rem;
    width: 10rem;
`;

//#endregion
//#region Section 03
function Section03() {
    return (
        <SectionsComponents>
            <S3Container>
                <S3Title>Nossos Planos</S3Title>
                <S3Grid>
                    <Card
                        content={[
                            'Qualquer horario durante a semana',
                            'Atividades em casa',
                            'Ensino dos cuidados necessarios aos responsaveis',
                        ]}
                        title="Plano Inicial"
                    />
                    <Card
                        content={[
                            'Qualquer horario durante a semana',
                            'Atividades em casa',
                            'Ensino dos cuidados necessarios aos responsaveis',
                            'Incluí adaptações ao ambiente do paciente',
                            'Inclui 1 sessão extra por mês',
                        ]}
                        title="Plano Intermediario"
                    />
                    <Card
                        content={[
                            'Qualquer horario durante a semana',
                            'Atividades em casa',
                            'Ensino dos cuidados necessarios aos responsaveis',
                            'Incluí adaptações ao ambiente do paciente',
                            'Inclui material Informativo adicional',
                            'Inclui 1 sessão extra por mês',
                        ]}
                        title="Plano Avançado"
                    />
                </S3Grid>
            </S3Container>
        </SectionsComponents>
    );
}

const Card: React.FC<React.PropsWithChildren<{ content: string[]; title: string }>> = (props) => {
    return (
        <CardHolder>
            <CardTitle>{props.title}</CardTitle>
            <CardContent>
                {props.content.map((e) => (
                    <li>{e}</li>
                ))}
            </CardContent>
        </CardHolder>
    );
};

const S3Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'League Spartan';

    padding: 1rem 0;
    padding-bottom: 2rem;
    gap: 1rem;
`;

const S3Grid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'League Spartan';
    gap: 3rem;
`;

const S3Title = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'League Spartan';
    font-size: 2.25rem;
    color: ${Colors.main};
`;

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.main};
    border-radius: 8px;
    padding: 0;
`;

const CardContent = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: ${Colors.light};
    padding: 1.5rem 3rem;
    margin: 0;
    border-radius: 8px;
    height: 350px;
    gap: 2rem;
    list-style-type: upper-roman;
`;

const CardTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    margin: 0;
    padding: 1rem;
    color: ${Colors.light};
    font-weight: 600;
`;
//#endregion

//#region Section 04
function Section04() {
    return (
        <SectionsComponents>
            <S4Container>
                <S4ContainerLeft>
                    <S4LeftTitle>Entre em contato!</S4LeftTitle>
                    <S4InputContainer placeholder="Email" />
                    <S4InputContainer placeholder="Nome" />
                    <S4TextAreaContainer placeholder="Descrição" />
                </S4ContainerLeft>
                <S4ContainerRight>
                    <S4ContainerRHeader>
                        <S4ContainerRHContent>
                            <S4ContainerRHIcon src={EmailSVG} />
                            YamamotoHarumy@gmail.com
                        </S4ContainerRHContent>
                        <S4ContainerRHContent>
                            <S4ContainerRHIcon src={PhoneSVG} />
                            (91) 9 8484-4053
                        </S4ContainerRHContent>
                    </S4ContainerRHeader>
                    <MapComponent />
                </S4ContainerRight>
            </S4Container>
        </SectionsComponents>
    );
}

const S4Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    height: 100%;
`;

const S4ContainerLeft = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 1rem;
`;

const S4LeftTitle = styled.h1`
    display: flex;
    justify-content: center;
    font-family: 'League Spartan';
    margin: 0;
    padding: 0;
    font-size: 2rem;
    color: ${Colors.main};
`;

const S4InputContainer = styled.input`
    padding: 1rem;
    font-family: 'League Spartan';
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #ffffff;
    color: ${Colors.dark};
    border: none;
    border-radius: 4px;
    outline: none;

    &::placeholder {
        /* padding: 1rem; */
        color: ${Colors.dark}50;
        font-weight: 600;
    }
`;

const S4TextAreaContainer = styled.textarea`
    padding: 1rem;
    font-family: 'League Spartan';
    font-size: 1.1rem;
    font-weight: 600;
    background-color: #ffffff;
    color: ${Colors.dark};
    border: none;
    resize: none;
    min-height: 200px;
    height: 100%;
    border-radius: 4px;
    outline: none;

    &::placeholder {
        /* padding: 1rem; */
        color: ${Colors.dark}50;
        font-weight: 600;
    }
`;

const S4ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    gap: 0.5rem;
`;

const S4ContainerRHeader = styled.div`
    display: flex;
    width: 100%;
    gap: 2rem;
    font-family: 'League Spartan';
    /* font-weight: 500; */
    font-size: 1.1rem;
    /* justify-content: space-between; */
`;

const S4ContainerRHContent = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 1rem;
`;

const S4ContainerRHIcon = styled(SvgImg)`
    display: flex;
    height: 2rem;
    width: auto;
`;

//#endregion

//#endregion

//#region GlobalComponents
const MobileFirst = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1000px;
    @media (max-width: 1000px) {
        display: flex;
        max-width: 50rem;
        width: auto;
    }
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
    min-width: 10rem;

    cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
    color: ${Colors.main};
    background-color: transparent;
`;
//#endregion

export default App;

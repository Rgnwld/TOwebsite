import React from 'react';
import styled from 'styled-components';

const Colors = {
    main: '#0D6B3C',
    mainLight: '#BED6CA',
    light: '#f9f9f9',
    dark: '#363636',
};

function App() {
    return (
        <div>
            <HeaderComponent />
            <Sections />
            <Footer />
        </div>
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

function Footer() {
    return <footer>Footer</footer>;
}

function Sections() {
    return <section>section</section>;
}

//#region GlobalComponents
const MobileFirst = styled.div`
    width: 1000px;
`;

const PrimaryButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.25rem 1rem;
    margin: 0.5rem;

    background-color: ${Colors.main};
    color: ${Colors.light};

    border-radius: 2rem;

    border: ${Colors.main} solid 1px;
    font-family: 'Inter', sans-serif;
    font-weight: 800;
    font-size: 0.9rem;
    min-width: 8rem;

    cursor: pointer;
`;

const SecondaryButton = styled(PrimaryButton)`
    color: ${Colors.main};
    background-color: transparent;
`;
//#endregion

export default App;

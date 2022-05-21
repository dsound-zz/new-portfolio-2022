import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./global";
import { colors } from "./colors";
import Avatar from "./assets/avatar.png";
import TypeScriptLogo from "./assets/typescript.png";
import ReactLogo from "./assets/react.png";
import RailsLogo from "./assets/rails2.png";
import RubyLogo from "./assets/ruby.png";
import LinkedinLogo from "./assets/linkedin.png";
import CSSLogo from "./assets/css.png";
import HTMLLogo from "./assets/html.png";
import ResumeLogo from "./assets/resume.png";
import ApolloLogo from "./assets/apollo.png";

const Container = styled.div`
  heigt: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
  flex-direction: row;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const ContentWrapper = styled.div`
  border: solid 1px ${colors.lightCream};
  padding: 50px 50px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 50%;
`;

const Name = styled.h2`
  color: ${colors.lightCream};
  flex: 3;
  margin-bottom: 20px;
`;

const Text = styled.div`
  color: ${colors.lightCream};
  flex: 1;
`;

const Navigation = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: calc(100% - 20px);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSideNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.button`
  border: 1px solid ${colors.lightCream};
  color: ${colors.lightCream};
  font-size: 20px;
  margin: 0 40px 20px 0;
  padding: 10px;

  &:hover {
    opacity: 0.6;
  }
`;

const Logo = styled.img`
  margin-bottom: 20px;
  order: 2;
  width: 200px;
  height: 200px;

  @media (max-width: 768px) {
    order: 1;
  }
`;

const SkillLogo = styled.img`
  margin-top: 50%;
  margin-bottom: 20px;
  order: 2;
  width: 40px;
  height: 40px;

  @media (max-width: 768px) {
    order: 1;
  }
`;
const Aside = styled.div`
  height: 100vh;
  width: 20vw;
  background-color: #b2dfdb;
  padding: 1rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Aside>
          <SkillLogo alt="typescriptLogo" src={TypeScriptLogo} />
          <SkillLogo alt="reactLogo" src={ReactLogo} />
          <SkillLogo alt="apolloLogo" src={ApolloLogo} />
          <SkillLogo alt="rubyLogo" src={RubyLogo} />
          <SkillLogo alt="railsLogo" src={RailsLogo} />
        </Aside>
        <Navigation>
          <LeftSideNav>
            <NavItem>Github</NavItem>
            <NavItem>Resume</NavItem>
            <NavItem>Projects</NavItem>
          </LeftSideNav>
          <Logo alt="Logo" src={Avatar} />
        </Navigation>

        <Main>
          <ContentWrapper>
            <Name>Demian Sims</Name>
            <Text>Writing beautiful, clean and effeicient code</Text>
          </ContentWrapper>
        </Main>
      </Container>
    </>
  );
}

export default App;

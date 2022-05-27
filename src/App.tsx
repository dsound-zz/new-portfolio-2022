import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "./global";
import { colors } from "./colors";
import avatar from "./assets/avatar.png";
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`;

const NavBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
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

const RightSideNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.a`
  border: ${colors.lightCream} 1px solid;
  color: ${colors.lightCream}
  font-size: 20px;
  margin: 0px 50px 20px 0;
  padding: 10px;

  &:hover {
    opacity: 0.6;
  }
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

const Content = styled.div`
  border: white solid 1px;
  flex: 1;
  width: calc(100% - 20px);
`;

const Text = styled.div`
  padding: 5em;

  h1 {
    color: ${colors.lightCream};
    letter-spacing: 0.2rem;
  }
`;

const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: white solid 1px;
  height: 20vh;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavBar>
          <LeftSideNav>
            <NavItem>Github</NavItem>
            <NavItem>Linkedin</NavItem>
            <NavItem>Projects</NavItem>
            <NavItem>Resume</NavItem>
          </LeftSideNav>
          <RightSideNav>
            <Avatar src={avatar} />
          </RightSideNav>
        </NavBar>
        <Content>
          <Text>
            <h1>Demian Sims</h1>
          </Text>
          <Skills>
            <h3>ReactJS</h3>
            <h3>React Native</h3>
            <h3>Typescript</h3>
            <h3>Rails</h3>
            <h3>Accessibility</h3>
          </Skills>
        </Content>
      </Container>
    </>
  );
}

export default App;

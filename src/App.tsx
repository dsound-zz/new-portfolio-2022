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
  justify-content: flex-start;
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
  width: 200px;
  height: 200px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 75%;
  margin-left: 100px;
  height: 70vh;
`;

const Text = styled.div`
  &.smallText {
    font-size: -0.5em;

    span {
      font-size: 3.2em;
      color: ${colors.nameColor};
      margin-bottom: 20px;
    }
  }

  &.descriptor {
    font-size: 5em;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2em;
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
          <NavItem>Github</NavItem>
          <NavItem>Linkedin</NavItem>
          <NavItem>Projects</NavItem>
          <NavItem>Resume</NavItem>
        </NavBar>
        <Content>
          <LeftSideNav>
            <TextWrapper>
              <Text className="smallText">
                i am
                <span className="name"> Demian Sims</span>
              </Text>
              <Text className="descriptor"> a FRONTend developer</Text>
            </TextWrapper>
          </LeftSideNav>
          <RightSideNav>
            <Avatar src={avatar} />
          </RightSideNav>
        </Content>
      </Container>
    </>
  );
}

export default App;

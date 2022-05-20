import React from "react"
import styled from "styled-components"
import { GlobalStyles } from "./global"
import TextAnimations from "./Components/Name"
import { colors } from "./colors"
import Name from "./Components/Name"

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
const NavBar = styled.nav`
  padding: 0.25rem;
  width: 100%;
  height: 10vh;
  border-bottom: 1px solid ${colors.lightCream};
  width: 80%;
`
const Main = styled.main`
  background: ${colors.mainBackground};
  color: white;
  padding: 0.25rem;
  flex: 10 1 auto;
  height: 100vh;
`
const SideBar = styled.div`
  background: #9aaab7;
  padding: 0.25rem;
  flex-grow: 1;
`

const Break = styled.div`
  flex-basis: 100%;
  width: 0;
`

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <NavBar>NavBar</NavBar>
        <Break />
        <Main>
          <Name />
        </Main>
      </Container>
    </>
  )
}

export default App

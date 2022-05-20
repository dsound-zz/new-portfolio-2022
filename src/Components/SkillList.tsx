import React from "react"
import styled, { CSSProperties, keyframes, css } from "styled-components"
import Skills from "./Skills"

interface ListProps {
  idx: number
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px 20px 20px;
  margin: 0;
  list-style: none;
`

const List = styled.li<ListProps>`
  animation-duration: ${(props) => props.idx};
  animation-name: ${fadeIn};
`

const items: string[] = [
  "ReactJS",
  "React Native",
  "Typescript",
  "Apollo",
  "Rails",
  "Accessibility",
]

const SkillList = () => {
  console.log("skill")

  return (
    <>
      <ItemList>
        {items.map((item: string, i: number) => (
          <List key={i} idx={i}>
            <Skills item={item} />
          </List>
        ))}
      </ItemList>
    </>
  )
}

export default SkillList

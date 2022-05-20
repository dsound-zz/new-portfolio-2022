import React from "react"
import styled from "styled-components"

const Item = styled.h3`
    padding: 20px
    color: gray;
    margin-top: 20px
`

const Skills = ({ item }: any) => {
  console.log(item)

  return <Item>{item}</Item>
}

export default Skills

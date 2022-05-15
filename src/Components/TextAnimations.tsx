import React from "react"
import ReactDom from "react-dom"
import styled, { CSSProperties, keyframes, css } from "styled-components"
import { UrlWithStringQuery } from "url"
import ruby from "../assets/128px-Ruby_logo.svg.png"

type TextAnimationProps = {
  animationName: string
  text: string
  size: string
  color?: string | undefined
  style?: CSSProperties | undefined
}

type HomeHeaderProps = {
  animationName: string
}

type TextProps = {
  size: string
}

const fadeDown = keyframes`
    0% {opacity:0; margin-top: 20px;}
    20% {opacity:0; margin-top: 30px;}
    80% {opacity:1; margin-top: 50px;}
    100% {opacity:2; margin-top: 60px;}
`
const HomeDiv = styled.div`
  // min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  justify-content: center;
  font-size: 1.5em;
  width: 100%;
`

const HomeHeader = styled.div<HomeHeaderProps>`
  position: relative;
  top: 0;
  ${({ animationName }) => handleAnimation(animationName)};
`

const Text = styled.h1<TextProps>`
  font-size: ${(props) => props.size};
  font-weight: lighten;
  color: ${(props) => props.color};
`

const TextAnimations = ({
  animationName,
  text,
  size,
  color,
  style,
}: TextAnimationProps) => {
  return (
    <HomeDiv>
      <HomeHeader animationName={animationName}>
        <Text style={style} size={size}>
          {text}
        </Text>
      </HomeHeader>
    </HomeDiv>
  )
}

export default TextAnimations

const handleAnimation = (animation: string) => {
  switch (animation) {
    case "fadeDown":
      return css`
        animation: ${fadeDown} 700ms ease-in forwards;
      `

    default:
      return css`
        animation: none;
      `
  }
}

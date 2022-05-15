import { createGlobalStyle } from "styled-components"
import { colors } from "./colors"

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
    *{  
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'NanumGothic';
        text-decoration: none;
        list-style: none;
          background: ${colors.mainBackground};
    }
    #root{
        margin:0 auto;
    }
 `

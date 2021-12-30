import { createGlobalStyle} from "styled-components";

export const darkTheme = {
    BASE: '#1A1D21',
    TINT: '#2B3036',
    SUPERLIGHTTINT: '#30353D',
    SUPERSHADE: "#121416",
    SHADE: '#101214',
    CONTENT: '#B0BFDE',
    PLACEHOLDER: '#585D68',
    INPUTON: '0F1012'
}

export const lightTheme = {
    BASE: '#1A1D21',
    TINT: '#2B3036',
    SUPERLIGHTTINT: '#30353D',
    SUPERSHADE: "#121416",
    SHADE: '#101214',
    CONTENT: '#B0BFDE',
    PLACEHOLDER: '#585D68',
    INPUTON: '0F1012'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "CartographCFRegular", "MBFNanomaton";
    transition: all 0.50s linear;
  }
`
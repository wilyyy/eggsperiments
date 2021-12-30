import { createGlobalStyle} from "styled-components";

export const darkTheme = {
    BASE: '#1A1D21',
    TINT: '#2B3036',
    SUPERLIGHTTINT: '#30353D',
    SUPERSHADE: "#121416",
    SHADE: '#101214',
    CONTENT: '#B0BFDE',
    PLACEHOLDER: '#484C55',
    INPUTON: '#BFBFBF'
}

export const lightTheme = {
    BASE: '#D8DADE',
    TINT: '#DFE5E5',
    SUPERLIGHTTINT: '#F7F7F7',
    SUPERSHADE: "#8E8E8E",
    SHADE: '#C5C8CC',
    CONTENT: '#121416',
    PLACEHOLDER: '#484C55',
    INPUTON: '#BFBFBF'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "CartographCFRegular", "MBFNanomaton";
    transition: all 0.50s linear;
  }
`
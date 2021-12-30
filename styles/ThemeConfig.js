import { createGlobalStyle} from "styled-components";

export const darkTheme = {
    BASE: '#1A1D21',
    TINT: '#2B3036',
    SUPERLIGHTTINT: '#30353D',
    SUPERSHADE: "#121416",
    SHADE: '#101214',
    CONTENT: '#B0BFDE',
    PLACEHOLDER: '#484C55',
    INPUTON: '#BFBFBF',
    INPUTSHADE: '#060707',
    INPUTTINT: '#414852',
    INPUTACTIVE: '#000'
}

export const lightTheme = {
    BASE: '#D8DADE',
    TINT: '#DFE5E5',
    SUPERLIGHTTINT: '#F7F7F7',
    SUPERSHADE: "#8E8E8E",
    SHADE: '#AFB3B8',
    CONTENT: '#121416',
    PLACEHOLDER: '#FFF',
    INPUTON: '#BFBFBF',
    INPUTSHADE: '#181818',
    INPUTTINT: '#F8F8F8',
    INPUTACTIVE: '#868686'
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "CartographCFRegular", "MBFNanomaton";
    transition: all 0.50s linear;
  }
`
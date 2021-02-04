import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';
import font from '../font/font';

const GlobalStyles = createGlobalStyle`
  ${normalize}
  ${font}

  *{
    outline: none;
  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }  


`;

export default GlobalStyles;

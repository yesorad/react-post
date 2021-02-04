import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import font from '../font/font';

const GlobalStyles = createGlobalStyle`
  ${reset}
  ${font}

  *{
    outline: none;
  }

  body {
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }  


`;

export default GlobalStyles;

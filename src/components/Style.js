import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,*::before,*::after {
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
  }
`;

export const GlobalStyleBody = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    @import url('https://fonts.googleapis.com/css?family=Catamaran:400,700');
  }
`;

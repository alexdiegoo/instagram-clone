import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

  @font-face {
    font-family: 'instagram';
    src: url('../font/Fontspring-DEMO-blue_vinyl_bold_ps_ot.otf');
  }

  :root {
    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    background-color: #fafafa;
  }
`;

export const Container = styled.div`
  max-width: 975px;
  min-width: 320px;
  margin: 0 auto;
`;
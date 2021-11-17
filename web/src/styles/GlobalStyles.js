import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    background-color: ${({ theme }) => theme.primaryBackground};
    transition: all 0.3s;
  }
`;


export const Container = styled.div`
  max-width: 975px;
  min-width: 310px;
  margin: 0 auto;
`;
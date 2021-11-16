import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';
import Header from './components/Header'

import { GlobalStyles, Container } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Header setIsDarkTheme={setIsDarkTheme} isDarkTheme={isDarkTheme} />
      <Container>
        <Home />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;

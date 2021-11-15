import React from 'react';
import { ThemeProvider } from 'styled-components';

import Home from './pages/Home';

import { GlobalStyles } from './styles/GlobalStyles';
import { lightTheme, darkTheme } from './styles/theme';

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App;

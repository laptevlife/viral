import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterComponent from './Router/RouterComponent';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <RouterComponent />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
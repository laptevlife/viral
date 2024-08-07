import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Typography, Button } from '@mui/material';
import RouterComponent from './Router/RouterComponent';
import Layout from './components/Layout';
// import BottomMenu from './components/BottomMenu';
// import HomePage from './pages/HomePage';
// import AboutPage from './pages/AboutPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      // fontSize: '2000px'
    },
  },
});

const App = () => {
  return (

    <ThemeProvider theme={theme}>
      <Layout>
        <RouterComponent />
        {/* <BottomMenu /> */}
      </Layout>
    </ThemeProvider>

  );
};

export default App;
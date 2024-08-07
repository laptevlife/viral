import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterComponent from './Router/RouterComponent';
import Layout from './components/Layout';
const tg = window.Telegram.WebApp

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => {
  console.log('tg444', tg);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        ^^^^^^^^^
        {tg?.initDataUnsafe?.user?.username}
        <button onClick={() => alert(JSON.stringify(tg?.initDataUnsafe))}>!!!!</button>
        <RouterComponent />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
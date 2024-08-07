import React, { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import RouterComponent from './Router/RouterComponent';
import Layout from './components/Layout';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import BottomMenu from './components/BottomMenu';
import { useActions } from './hooks/redux';
import { userSlice } from './features/userSlice';
const tg = window.Telegram.WebApp

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

const App = () => {
  const { setUser, setInitDataUnsafe } = useActions(userSlice.actions);
  useEffect(() => {
    setUser(tg?.initDataUnsafe?.user)
    setInitDataUnsafe(tg?.initDataUnsafe)
  }, [tg])

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <RouterComponent />
          <BottomMenu />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
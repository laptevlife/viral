import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RefPage from '../pages/RefPage/RefPage';
import TopPage from '../pages/TopPage/TopPage';
import BottomMenu from '../components/BottomMenu';
import { ERoutes } from './router.constant';
import BoostsPage from '../pages/BoostsPage/BoostsPage';
import EarnPage from '../pages/EarnPage/Earn';

const RouterComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={ERoutes.TOP} />} />
        <Route path={ERoutes.PROFILE} element={<ProfilePage />} />
        <Route path={ERoutes.REF} element={<RefPage />} />
        <Route path={ERoutes.TOP} element={<TopPage />} />
        <Route path={ERoutes.BOOSTS} element={<BoostsPage />} />
        <Route path={ERoutes.EARN} element={<EarnPage />} />
      </Routes>
      <BottomMenu />
    </Router>
  );
};

export default RouterComponent;

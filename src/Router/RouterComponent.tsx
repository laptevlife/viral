import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage/ProfilePage';
import RefPage from '../pages/RefPage/RefPage';
import TopPage from '../pages/TopPage/TopPage';
import { ERoutes } from './router.constant';
import BoostsPage from '../pages/BoostsPage/BoostsPage';
import EarnPage from '../pages/EarnPage/Earn';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ERoutes.TOP} />} />
      <Route path={ERoutes.PROFILE} element={<ProfilePage />} />
      <Route path={ERoutes.REF} element={<RefPage />} />
      <Route path={ERoutes.TOP} element={<TopPage />} />
      <Route path={ERoutes.BOOSTS} element={<BoostsPage />} />
      <Route path={ERoutes.EARN} element={<EarnPage />} />
    </Routes>
  );
};

export default RouterComponent;

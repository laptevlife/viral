import React from 'react';
import s from './index.module.scss';
import useNavigateUtils from '../../hooks/useNavigateUtils';
import { ERoutes } from '../../Router/router.constant';
import cn from 'classnames';
import {
  Lightning,
  RocketLaunch,
  Trophy,
  UsersThree,
  Vector,
} from '../svg/svgComponents';

const BottomMenu = () => {
  const { goTo, location } = useNavigateUtils();
  console.log('location', location);

  const menuItems = [
    {
      ref: ERoutes.EARN,
      icon: <Lightning />,
      name: 'Earn',
    },
    {
      ref: ERoutes.BOOSTS,
      icon: <RocketLaunch />,
      name: 'Boost',
    },
    {
      ref: ERoutes.TOP,
      icon: <Trophy />,
      name: 'Top',
    },
    {
      ref: ERoutes.REF,
      icon: <UsersThree />,
      name: 'Frens',
    },
    {
      ref: ERoutes.PROFILE,
      icon: <Vector />,
      name: 'Profile',
    },
  ];

  return (
    <div className={s.bottomMenu}>
      {menuItems.map((i) => {
        return (
          <div
            className={cn(s.bottomMenuItem, {
              [s.activeItem]: location.pathname === i.ref,
            })}
            onClick={() => goTo(i.ref)}
          >
            <div className={s.bottomMenuItemIcon}>{i.icon}</div>
            <div className={s.bottomMenuItemTitle}>{i.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomMenu;

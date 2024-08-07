import React from 'react';
import s from './index.module.scss';

// import Lightning from '../../assets/icons/Lightning.svg';
// import RocketLaunch from '../../assets/icons/RocketLaunch.svg';
// import Trophy from '../../assets/icons/Trophy.svg';
// import UsersThree from '../../assets/icons/UsersThree.svg';
// import Vector from '../../assets/icons/Vector.svg';
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
      ref: ERoutes.PROFILE,
      icon: <Vector />,
      name: 'Profile',
    },
    {
      ref: ERoutes.REF,
      icon: <UsersThree />,
      name: 'Ref',
    },
    {
      ref: ERoutes.TOP,
      icon: <Trophy />,
      name: 'Top',
    },
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
      {/* <div className={s.bottomMenuItem} onClick={() => goTo(ERoutes.PROFILE)}>
        <img className={s.bottomMenuItemIcon} src={Vector} />
        <div className={s.bottomMenuItemTitle}>Profile</div>
      </div>
      <div className={s.bottomMenuItem} onClick={() => goTo(ERoutes.REF)}>
        <img className={s.bottomMenuItemIcon} src={UsersThree} />
        <div className={s.bottomMenuItemTitle}>Ref</div>
      </div>
      <div className={s.bottomMenuItem} onClick={() => goTo(ERoutes.TOP)}>
        <img className={s.bottomMenuItemIcon} src={Trophy} />
        <div className={s.bottomMenuItemTitle}>Top</div>
      </div>
      <div className={s.bottomMenuItem} onClick={() => goTo(ERoutes.EARN)}>
        <img className={s.bottomMenuItemIcon} src={Lightning} />
        <div className={s.bottomMenuItemTitle}>Earn</div>
      </div>
      <div className={s.bottomMenuItem} onClick={() => goTo(ERoutes.BOOSTS)}>
        <img className={s.bottomMenuItemIcon} src={RocketLaunch} />
        <div className={s.bottomMenuItemTitle}>Boost</div>
      </div> */}
    </div>
  );
};

export default BottomMenu;

import React from 'react';
import s from './index.module.scss';
import cn from 'classnames';
import { ArrowTopBold, ViralBlueIcon } from '../svg/svgComponents';
import img from '../../assets/img/testImg.jpg';

const UserProfileRow = ({ i, currentUser }: any) => {
  return (
    <div
      className={cn(s.profileStatItem, {
        [s.currentUser]: currentUser,
      })}
    >
      <div className={s.userStatWrapper}>
        <div className={s.userImg}>
          <img src={img} alt="" />
        </div>
        <div className={s.profileStatItemLeft}>
          <div className={s.userInfo}>
            <div className={s.userName}>
              Vladimir Putin
              {currentUser && <span className={s.you}>You</span>}
            </div>
            <div className={s.userStat}>
              <ViralBlueIcon />
              <span>34,366,837</span>
            </div>
          </div>
        </div>
        <div className={s.profileStatRight}>
          {currentUser ? (
            <div className={cn(s.number, s.numberCurrentUser)}>#424,656</div>
          ) : (
            <>
              <div className={s.number}>{i}</div>
              <div className={s.click}>
                <ArrowTopBold />
              </div>
            </>
          )}

          {/* <div className={s.number}>4</div> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfileRow;

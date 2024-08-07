import React from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import {
  First,
  Second,
  Substract,
  Third,
} from '../../components/svg/svgComponents';

const TopPage = () => {
  return (
    <div>
      <div className={s.topThree}>
        <div className={cn(s.user, s.userSmallImg)}>
          <div className={s.userImage}>
            <img src={img} />
            <div className={s.placeNumberIcon}>
              <Second />
            </div>
          </div>
          <div className={s.userInfo}>
            <div className={s.userName}>Yagit Lera</div>
            <div className={s.userStat}>
              <Substract />
              34,366,837
            </div>
          </div>
        </div>
        <div className={s.user}>
          <div className={s.userImage}>
            <img src={img} />
            <div className={s.placeNumberIcon}>
              <First />
            </div>
          </div>
          <div className={s.userInfo}>
            <div className={s.userName}>Yagit Lera</div>
            <div className={s.userStat}>
              <Substract />
              34,366,837
            </div>
          </div>
        </div>
        <div className={cn(s.user, s.userSmallImg)}>
          <div className={s.userImage}>
            <img src={img} />
            <div className={s.placeNumberIcon}>
              <Third />
            </div>
          </div>
          <div className={s.userInfo}>
            <div className={s.userName}>Yagit Lera</div>
            <div className={s.userStat}>
              <Substract />
              34,366,837
            </div>
          </div>
        </div>
      </div>

      <div className={s.boxRow}>
        <div className={s.box}>
          <div className={s.firstRow}>2.8K</div>
          <div className={s.secondRow}>Your tokens</div>
        </div>
        <div className={s.box}>
          <div className={s.firstRow}>2.8K</div>
          <div className={s.secondRow}>Your tokens</div>
        </div>
      </div>

      <div className={s.gradientBorder}>
        <div className={s.content}>Контент внутри</div>
      </div>
    </div>
  );
};

export default TopPage;

import React from 'react';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.svg';
import number from '../../assets/img/number.svg';
import telegram from '../../assets/img/telegram.svg';
import inst from '../../assets/img/inst.svg';
import X from '../../assets/img/x.svg';
import cn from 'classnames';
import {
  ArrowRightIcon,
  ArrowTopBlack,
} from '../../components/svg/svgComponents';
import Button from '../../components/Button';

const Profile = ({ currentUser = true }: any) => {
  return (
    <div>
      <div className={s.userProfileImage}>
        <img src={img} alt="" />
      </div>
      <div className={s.userName}>Test Name</div>
      <div className={s.profileDescription}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        quam facere iusto ratione sed, ad reiciendis quis eum tenetur illum
        atque praesentium
      </div>

      <div className={s.boxRow}>
        <div className={cn(s.box, s.boxStat)}>
          <img src={V} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.firstRow}>VIRALS</div>
            <div className={s.secondRow}>123,456.789</div>
          </div>
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={number} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.firstRow}>Rank</div>
            <div className={s.secondRow}>#204,301</div>
          </div>
        </div>
      </div>

      <div className={s.linksBlock}>
        <div className={cn(s.box, s.boxStat)}>
          <img src={telegram} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}> Telegram</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={inst} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}> Instagram</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
        <div className={cn(s.box, s.boxStat)}>
          <img src={X} className={s.statImg} alt="" />
          <div className={s.statData}>
            <div className={s.secondRow}>X(ex. Twitter)</div>
            <div className={s.firstRow}>@link</div>
          </div>
          <ArrowRightIcon style={{ marginLeft: 'auto' }} />
        </div>
      </div>
      {!currentUser && (
        <Button className={s.voteBtn}>
          {' '}
          <span>Vote</span>{' '}
          <span>
            <ArrowTopBlack />
          </span>
        </Button>
      )}
    </div>
  );
};

export default Profile;

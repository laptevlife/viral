import React from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import {
  First,
  Second,
  ViralBlueIcon,
  Third,
  UnderClaimBlock,
  YourRankBlock,
  YourTokensBlock,
  ViralBlackIcon,
} from '../../components/svg/svgComponents';
import collab from '../../assets/img/collab.png';
import promote from '../../assets/img/promote.png';
import PageLayout from '../../components/Layout/PageLayout';
import Tabs from '../../components/Tabs';

const TopPage = () => {
  return (
    <>
      <PageLayout>
        <div className={s.topThree}>
          <div className={cn(s.user, s.userSmallImg)}>
            <div className={s.userImage}>
              <img src={img} alt="" />
              <div className={s.placeNumberIcon}>
                <Second />
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>Yagit Lera</div>
              <div className={s.userStat}>
                <ViralBlueIcon />
                34,366,837
              </div>
            </div>
          </div>
          <div className={s.user}>
            <div className={s.userImage}>
              <img src={img} alt="" />
              <div className={s.placeNumberIcon}>
                <First />
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>Yagit Lera</div>
              <div className={s.userStat}>
                <ViralBlueIcon />
                34,366,837
              </div>
            </div>
          </div>
          <div className={cn(s.user, s.userSmallImg)}>
            <div className={s.userImage}>
              <img src={img} alt="" />
              <div className={s.placeNumberIcon}>
                <Third />
              </div>
            </div>
            <div className={s.userInfo}>
              <div className={s.userName}>Yagit Lera</div>
              <div className={s.userStat}>
                <ViralBlueIcon />
                34,366,837
              </div>
            </div>
          </div>
        </div>

        <div className={s.boxRow}>
          <div className={cn(s.box, s.boxWhite)}>
            <YourTokensBlock />
            <div className={s.firstRow}>2.8K</div>
            <div className={s.secondRow}>Your tokens</div>
          </div>
          <div className={cn(s.box)}>
            <YourRankBlock />
            <div className={s.firstRow}>204</div>
            <div className={s.secondRow}>Your rank</div>
          </div>
        </div>

        <div className={cn(s.gradientBorder, s.claimBtn)}>
          <div className={s.content}>
            <div className={s.btnText}>Claim</div>
            <div className={s.claimCount}>
              <ViralBlackIcon />
              120
            </div>
          </div>
        </div>

        <div className={s.boxRow}>
          <div className={cn(s.box)}>
            <UnderClaimBlock />
            <img className={s.firstRow} src={promote} alt="" />
            <div className={s.secondRow}>Promote</div>
          </div>
          <div className={cn(s.box)}>
            <UnderClaimBlock />
            <img className={s.firstRow} src={collab} alt="" />
            <div className={s.secondRow}>Collab</div>
          </div>
        </div>
      </PageLayout>
      <div className={s.greyPaper}>
        <Tabs />
      </div>
    </>
  );
};

export default TopPage;

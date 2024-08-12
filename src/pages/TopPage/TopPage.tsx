import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.png';
import Coin from '../../assets/img/Coin.png';

import {
  First,
  Second,
  ViralBlueIcon,
  Third,
  GradientBg,
  ArrowRight,
  LockIcon,
} from '../../components/svg/svgComponents';
import collab from '../../assets/img/collab.png';
import promote from '../../assets/img/promote.png';
import PageLayout from '../../components/Layout/PageLayout';
import Tabs from '../../components/Tabs';
import UserProfileRow from '../../components/UserProfileRow';
import { useAppSelector } from '../../hooks/redux';

const TopPage = () => {
  const { tg } = useAppSelector((state) => state.userReducer);
  const onPromote = () => {
    console.log('tg', tg);

    tg.showPopup({
      // url: 'https://example.com', // URL для открытия в поп-апе
      width: 400, // ширина поп-апа
      height: 600, // высота поп-апа
    });
  };

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);

  const intervalRef = useRef<any>(null); // Используем useRef для хранения interval
  useEffect(() => {
    if (step === 4) {
      intervalRef.current = setInterval(() => {
        setProgress((progress) => progress + 1);
      }, 30);
    }
  }, [step, setProgress]);
  useEffect(() => {
    if (progress === 100) {
      clearInterval(intervalRef.current);
      setProgress(0);
      setStep(1);
    }
  }, [progress, setProgress, setStep]);

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
              <div className={s.userName}>Katesobol</div>
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
              <div className={s.userName}>ViralAVG</div>
              <div className={s.userStat}>
                <ViralBlueIcon />
                34,366,837
              </div>
            </div>
          </div>
        </div>

        <div className={s.boxRow}>
          <div className={cn(s.box, s.boxStat)}>
            <img src={V} className={s.statImg} alt="" />
            <div className={s.statData}>
              <div className={s.firstRow}>VIRALS</div>
              <div className={s.secondRow}>123,456.789</div>
            </div>
          </div>
          <GradientBg />
          <div className={cn(s.box, s.boxStat)}>
            <img src={Coin} className={s.statImg} alt="" />
            <div className={s.statData}>
              <div className={s.firstRow}>VOTES</div>
              <div className={s.secondRow}>0/10</div>
            </div>
          </div>
        </div>

        <div
          className={cn(s.claimBtn, {
            [s.step2]: step === 2,
            [s.step3]: step === 3,
            [s.step4]: step === 4,
          })}
          onClick={() => setStep(step === 4 ? 1 : step + 1)}
        >
          <div className={s.content}>
            {step === 1 && (
              <>
                <div className={s.btnText}>Claim</div>
                <div className={s.claimCount}>
                  <span>10</span>
                  <img src={Coin} className={s.coinImg} alt="" />
                </div>
              </>
            )}
            {(step === 2 || step === 3) && (
              <>
                <div className={s.btnText}>Start farming</div>
                <LockIcon />
              </>
            )}
            {step === 4 && (
              <div className={s.contentStep4}>
                <div className={s.time}>05h54m</div>
                <div className={s.btnText}>Farming</div>
                <div className={s.claimCount}>
                  <img src={Coin} className={s.coinImg} alt="" />
                  <span>3.07</span>
                </div>
              </div>
            )}
          </div>
          {step === 4 && (
            <div className={s.progress} style={{ width: `${progress}%` }}></div>
          )}
        </div>
        <div
          className={cn(s.claimBtn, s.claimBtnInfo, {
            [s.claimBtnInfoActive]: step === 2,
          })}
        >
          <div className={s.content}>Spend all your votes to farm new ones</div>
        </div>

        <div className={cn(s.boxRow)}>
          <div
            className={cn(s.box, s.underClaimBlock)}
            onClick={() => onPromote()}
          >
            {/* <UnderClaimBlock /> */}
            <img className={s.firstRow} src={promote} alt="" />
            <div className={s.secondRow}>
              <span>Promote</span>
              <ArrowRight />
            </div>
          </div>
          <div className={cn(s.box, s.underClaimBlock)}>
            {/* <UnderClaimBlock /> */}
            <img className={s.firstRow} src={collab} alt="" />
            <div className={s.secondRow}>
              <span>Collab</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </PageLayout>
      <div className={s.greyPaper}>
        <Tabs />
      </div>
      <div className={s.currentUserProfileRow}>
        <UserProfileRow currentUser={true} />
      </div>
      <div style={{ height: '140px' }}> </div>
    </>
  );
};

export default TopPage;

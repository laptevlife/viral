import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.svg';
import Coin from '../../assets/img/Coin.svg';
import Top from '../../assets/img/Top.svg';

import {
  First,
  Second,
  ViralBlueIcon,
  Third,
  GradientBg,
  ArrowRight,
  LockIcon,
  ShareArrowIcon,
  CopyIcon,
} from '../../components/svg/svgComponents';
import collab from '../../assets/img/collab.svg';
import promote from '../../assets/img/promote.svg';
import PageLayout from '../../components/Layout/PageLayout';
import Tabs from '../../components/Tabs';
import UserProfileRow from '../../components/UserProfileRow';
import { useAppSelector } from '../../hooks/redux';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Profile from '../ProfilePage/Profile';

const TopPage = () => {
  const [modalPromoteOpen, setOpenPromoteModal] = useState(false);
  const [modalProfileOpen, setOpenProfileModal] = useState(false);
  const { tg } = useAppSelector((state) => state.userReducer);

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
            onClick={() => {
              setOpenPromoteModal(true);
            }}
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
        <Modal
          isOpen={modalPromoteOpen}
          closeModal={() => setOpenPromoteModal(false)}
        >
          <div className={s.topImg}>
            <img src={Top} alt="" />
          </div>
          <div className={s.shareContent}>
            <div className={s.shareTitle}>
              Share your profile to frens <br /> and promote yourself
            </div>
            <div className={s.shareDescription}>
              For every vote you receive, you earn <br /> 10 VIRALS
            </div>
            <div className={s.shareActions}>
              <Button className={s.shareBtn}>
                {' '}
                <span>Share</span>{' '}
                <span>
                  <ShareArrowIcon />
                </span>
              </Button>
              <div className={s.copyLink}>
                <CopyIcon />{' '}
              </div>
            </div>
          </div>
        </Modal>
        <Modal
          isOpen={modalProfileOpen}
          closeModal={() => setOpenProfileModal(false)}
        >
          <Profile currentUser={false} />
        </Modal>
      </PageLayout>
      <div className={s.greyPaper} onClick={() => setOpenProfileModal(true)}>
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

import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';
import V from '../../assets/img/V.svg';
import Coin from '../../assets/img/Coin.svg';
import Coin2 from '../../assets/img/Group 24.svg';
import Coin3 from '../../assets/img/Group 25.svg';
import Top from '../../assets/img/Top.svg';
import personFace from '../../assets/img/personFace.svg';

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
  StarIcon,
  ArrowCircleIcon,
} from '../../components/svg/svgComponents';
import collab from '../../assets/img/collab.svg';
import promote from '../../assets/img/promote.svg';
import PageLayout from '../../components/Layout/PageLayout';
import Tabs from '../../components/Tabs';
import UserProfileRow from '../../components/UserProfileRow';
// import { useAppSelector } from '../../hooks/redux';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Profile from '../ProfilePage/Profile';
import useNavigateUtils from '../../hooks/useNavigateUtils';
import { ERoutes } from '../../Router/router.constant';

const TopPage = () => {
  const [modalPromoteOpen, setOpenPromoteModal] = useState(false);
  const [modalProfileOpen, setOpenProfileModal] = useState(false);
  const [modalPayWallOpen, setOpenModalPayWall] = useState(false);
  // const { tg } = useAppSelector((state) => state.userReducer);

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const { goTo } = useNavigateUtils();
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

  const [payVariant, setPayVariant] = useState(1);

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
            <img className={s.firstRow} src={promote} alt="" />
            <div className={s.secondRow}>
              <span>Promote</span>
              <ArrowRight />
            </div>
          </div>
          <div className={cn(s.box, s.underClaimBlock)}>
            <img className={s.firstRow} src={collab} alt="" />
            <div className={s.secondRow}>
              <span>Collab</span>
              <ArrowRight />
            </div>
          </div>
        </div>
      </PageLayout>
      <div className={s.greyPaper} onClick={() => setOpenProfileModal(true)}>
        <Tabs />
      </div>
      <div
        className={s.currentUserProfileRow}
        onClick={() => goTo(ERoutes.PROFILE)}
      >
        <UserProfileRow currentUser={true} />
      </div>
      <Modal
        isOpen={modalPromoteOpen}
        closeModal={() => setOpenPromoteModal(false)}
      >
        <div className={s.topImg}>
          <img src={Top} alt="" />
          <div className={s.topPerson}>
            <div className={cn(s.rowBox)}>
              <img src={personFace} className={s.image} alt="" />
              <div className={s.rowContent}>
                <div className={s.topRow}>Test Name</div>
                <div className={s.underTopRow}>
                  <img className={s.v} src={V} alt="" />
                  <div className={s.count}>34,333,444</div>
                </div>
              </div>
              <ArrowCircleIcon
                style={{ marginLeft: 'auto', marginTop: '5px' }}
              />
            </div>
          </div>
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
        <Profile
          currentUser={false}
          action={() => {
            setOpenModalPayWall(true);
            setOpenProfileModal(false);
          }}
        />
      </Modal>
      <Modal
        isOpen={modalPayWallOpen}
        closeModal={() => setOpenModalPayWall(false)}
      >
        <div className={s.shareContent}>
          <div className={s.shareTitle}>Don't want to wait 8 hours?</div>
          <div className={s.shareDescription}>
            You can buy votes for Telegram stars
          </div>
          <div className={s.payVariants}>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(0)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 0,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin} style={{ marginTop: '5px' }} alt="" />
                </div>
                <div className={s.payVarContentTitle}>10 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>120,000</div>
                </div>
              </div>
            </div>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(1)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 1,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin2} style={{ marginTop: '5px' }} alt="" />
                </div>
                <div className={s.payVarContentTitle}>20 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>220,000</div>
                </div>
              </div>
            </div>
            <div className={cn(s.payVar)} onClick={() => setPayVariant(2)}>
              <div
                className={cn(s.variantBg, {
                  [s.variantBgActive]: payVariant === 2,
                })}
              ></div>
              <div className={s.payVarContent}>
                <div className={s.payVarContentIcon}>
                  <img src={Coin3} alt="" />
                </div>
                <div className={s.payVarContentTitle}>50 VOTES</div>
                <div className={s.payVarContentCount}>
                  <div className={s.star}>
                    <StarIcon />
                  </div>
                  <div className={s.count}>340,000</div>
                </div>
              </div>
            </div>
          </div>
          <Button style={{ marginTop: '20px' }}>
            <span>Continue</span>
          </Button>
        </div>
      </Modal>
      <div style={{ height: '140px' }}> </div>
    </>
  );
};

export default TopPage;

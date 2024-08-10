import PageLayout from '../../components/Layout/PageLayout';
import { useAppSelector } from '../../hooks/redux';
import s from './index.module.scss';
import img from '../../assets/img/testImg.jpg';

const ProfilePage = () => {
  const { user, initDataUnsafe } = useAppSelector((state) => state.userReducer);

  return (
    <PageLayout>
      <div className={s.userProfileImage}>
        <img src={img} alt="" />
      </div>
      <div className={s.userName}>{user?.username}</div>
      <div style={{ marginTop: '50px' }}>initDataUnsafe:</div>
      {JSON.parse(initDataUnsafe)}
      <div>User:</div>
      <div>{JSON.parse(user)}</div>s
    </PageLayout>
  );
};

export default ProfilePage;

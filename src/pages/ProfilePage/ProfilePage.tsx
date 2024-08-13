import PageLayout from '../../components/Layout/PageLayout';
// import { useAppSelector } from '../../hooks/redux';
// import s from './index.module.scss';
// import img from '../../assets/img/testImg.jpg';
import Profile from './Profile';

const ProfilePage = () => {
  // const { user } = useAppSelector((state) => state.userReducer);

  return (
    <PageLayout>
      <Profile />
      {/* <div className={s.userProfileImage}>
        <img src={img} alt="" />
      </div>
      <div className={s.userName}>{user?.username}</div>
      <div style={{ marginTop: '50px' }}>initDataUnsafe:</div>
      {JSON.stringify(initDataUnsafe)} */}
      {/* <div>User:</div>
      <div>{JSON.stringify(user)}</div>s */}
    </PageLayout>
  );
};

export default ProfilePage;

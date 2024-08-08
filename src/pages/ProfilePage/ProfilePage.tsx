import PageLayout from '../../components/Layout/PageLayout';
import { useAppSelector } from '../../hooks/redux';

const ProfilePage = () => {
  const { user, initDataUnsafe } = useAppSelector((state) => state.userReducer);

  return (
    <PageLayout>
      <div>ProfilePage</div>
      User name: {user?.username}
      <div>initDataUnsafe:</div>
      {JSON.stringify(initDataUnsafe)}
      <div>User:</div>
      <div>{JSON.stringify(user)}</div>s
    </PageLayout>
  );
};

export default ProfilePage;

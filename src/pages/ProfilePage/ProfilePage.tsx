import { useTelegram } from '../../hooks/useTelegram';

const ProfilePage = () => {
  const { tg } = useTelegram();
  console.log('tg', tg);

  return <div>ProfilePage</div>;
};

export default ProfilePage;

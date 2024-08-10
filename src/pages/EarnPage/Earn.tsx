import PageLayout from '../../components/Layout/PageLayout';
import { useAppSelector } from '../../hooks/redux';

const EarnPage = () => {
  const { tg, tgUser } = useAppSelector((state) => state.userReducer);
  return (
    <PageLayout>
      EarnPage
      {JSON.stringify(tg)}
      <div>TG user</div>
      {JSON.stringify(tgUser)}
    </PageLayout>
  );
};

export default EarnPage;

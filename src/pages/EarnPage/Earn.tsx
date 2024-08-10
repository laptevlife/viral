import PageLayout from '../../components/Layout/PageLayout';
import { useAppSelector } from '../../hooks/redux';

const EarnPage = () => {
  const { tg } = useAppSelector((state) => state.userReducer);
  return (
    <PageLayout>
      EarnPage
      {JSON.stringify(tg)}
    </PageLayout>
  );
};

export default EarnPage;

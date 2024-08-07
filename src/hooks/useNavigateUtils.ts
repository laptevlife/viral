import { useLocation, useNavigate, useParams } from 'react-router-dom';

const useNavigateUtils = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goTo = (route: string, locationState?: string) => {
    return navigate(route, { state: { pathname: locationState || location?.pathname } });
  };

  return {
    goTo,
    paramsId: params.id,
    // sectionId: params.sectionId,
    location: location,
  };
};

export default useNavigateUtils;
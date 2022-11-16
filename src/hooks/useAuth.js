import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const user = useSelector(authSelectors.selectUserEmail);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};

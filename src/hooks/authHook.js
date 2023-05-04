import { useSelector } from 'react-redux';
import { selectLoggedIn, selectIsRefreshing, selectUser} from 'redux/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
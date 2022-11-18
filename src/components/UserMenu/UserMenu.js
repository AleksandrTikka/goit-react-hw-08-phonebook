import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout <LogoutIcon sx={{ fontSize: 15 }} />
      </button>
    </div>
  );
};

import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from 'hooks';
import { UserBox, Greetings, Name } from './UserMenu.styled';
import IconButton from '@mui/material/IconButton';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox>
      <Greetings>
        Welcome, <Name>{user}</Name>!
      </Greetings>
      <IconButton
        color="warning"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon sx={{ fontSize: 25 }} />
      </IconButton>
    </UserBox>
  );
};

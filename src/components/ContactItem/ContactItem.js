// import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { useState /*useEffect*/ } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { styled } from '@mui/material/styles';
// import { theme } from 'theme';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ContactItem = ({ name, number, id }) => {
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

  // const DeleteBtn = styled(Button)(() => ({
  //   color: theme.colors.white,
  //   backgroundColor: theme.colors.bgButtonDelete,
  //   border: theme.borders.none,
  //   borderRadius: theme.radii.sm,

  //   '&:hover': {
  //     backgroundColor: theme.colors.bgButtonHover,
  //     color: theme.colors.bgButtonDelete,
  //     outline: theme.borders.bold,
  //     outlineColor: theme.colors.heading,
  //     fontWeight: theme.fontWeights.bold,
  //   },
  // }));
  return (
    <Item>
      {name}: {number}
      {deleting ? (
        <p>Deleting...</p>
      ) : (
        <IconButton
          size="small"
          color="error"
          type="button"
          onClick={() => {
            setDeleting(true);
            dispatch(deleteContact(id));
          }}
          disabled={deleting}
        >
          <DeleteOutlineIcon fontSize="small" />
        </IconButton>
      )}
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

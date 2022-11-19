import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const ContactItem = ({ name, number, id }) => {
  const [deleting, setDeleting] = useState(false);

  const dispatch = useDispatch();

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
          <DeleteForeverOutlinedIcon fontSize="small" />
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

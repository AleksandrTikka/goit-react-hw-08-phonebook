// import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { useState /*useEffect*/ } from 'react';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { theme } from 'theme';

// import { useSelector } from 'react-redux';
// import { selectIsLoading } from 'redux/contacts/selectors';
const ContactItem = ({ name, number, id }) => {
  const [deleting, setDeleting] = useState(false);
  // const loading = useSelector(selectIsLoading);
  // useEffect(() => {

  // }, [loading]);
  const dispatch = useDispatch();

  const DeleteBtn = styled(Button)(() => ({
    color: theme.colors.white,
    backgroundColor: theme.colors.bgButtonDelete,
    border: theme.borders.none,
    borderRadius: theme.radii.sm,

    '&:hover': {
      backgroundColor: theme.colors.bgButtonHover,
      outline: theme.borders.bold,
      outlineColor: theme.colors.heading,
    },
  }));
  return (
    <Item>
      {name}: {number}
      <DeleteBtn
        type="button"
        onClick={() => {
          setDeleting(true);
          id => {
            dispatch((deleteContact(id), { id }));
          };
        }}
      >
        {deleting ? 'Deleting...' : 'Delete'}
      </DeleteBtn>
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

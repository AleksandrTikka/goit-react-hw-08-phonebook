import { Btn } from '../App/App.styled';
import { Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import PropTypes from 'prop-types';
import { theme } from 'theme';
const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      {name}: {number}
      <Btn
        backgroundColor="${p => p.theme.colors.bgButtonDelete}"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Btn>
    </Item>
  );
};
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactItem;

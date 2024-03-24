import { useDispatch, useSelector } from 'react-redux';
import { ListBtn, ListItem, Number } from './Contacts.styled';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';
import { Button } from '@mui/material';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const handleDelete = id => {
    console.log(id);
    dispatch(deleteContact(id));
  };

  // const filteredContacts = savedContacts.filter(
  // ({ name }) => name.toLowerCase().includes(savedFilter.toLowerCase())
  // )
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ListItem key={contact.id}>
            {contact.name} <Number>{contact.number}</Number>
            <Button onClick={() => dispatch(handleDelete(contact.id))}>
              Delete
            </Button>{' '}
          </ListItem>
        );
      })}
    </ul>
  );
};

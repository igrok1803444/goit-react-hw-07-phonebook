import { useDispatch, useSelector } from 'react-redux';
import { List, DeleteButton } from './ContactsList.styled';
import { getContacts, getStatusFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getStatusFilter);

  const visibleContacts = filterContacts(contacts, filter);

  function filterContacts(contacts, filter) {
    return contacts.filter(contact => {
      if (filter.trim() === '') {
        return contacts;
      }
      return contact.name.toLowerCase().includes(filter.trim().toLowerCase());
    });
  }
  function deleteHandler(id) {
    dispatch(deleteContact(id));
  }

  return (
    <List>
      {visibleContacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <DeleteButton type="button" onClick={() => deleteHandler(id)}>
            delete
          </DeleteButton>
        </li>
      ))}
    </List>
  );
};

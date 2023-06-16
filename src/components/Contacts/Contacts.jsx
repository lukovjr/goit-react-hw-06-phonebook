import { ContactsListEl, ContactsList, ContactsBtn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = () => {
  const contactsValue = useSelector(state => state.contacts.contacts);
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log(contactsValue);
  console.log(filterValue);

  const delContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const getVisibleContacts = contactsValue.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase())
    );

  return (
    <>
      <ContactsList>
        {getVisibleContacts.map(el => {
          return (
            <ContactsListEl key={el.id}>
              {el.name} <span>{el.number}</span>
              <ContactsBtn type="button" onClick={() => delContact(el.id)}>
                Delete
              </ContactsBtn>
            </ContactsListEl>
          );
        })}
      </ContactsList>
    </>
  );
};
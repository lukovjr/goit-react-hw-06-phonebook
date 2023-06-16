import { ContactsListEl, ContactsList, ContactsBtn } from './Contacts.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import {  getContacts, getFilters } from 'redux/selector';

export const Contacts = () => {
  const contactsValue = useSelector(getContacts);
  const filterValue = useSelector(getFilters);
  const dispatch = useDispatch();
  console.log(contactsValue);
  console.log(filterValue);
  
  
  const getVisibleContacts = contactsValue.filter(({ name }) =>
  name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const delContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

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

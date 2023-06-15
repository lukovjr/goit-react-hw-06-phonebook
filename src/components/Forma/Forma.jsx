import { useState } from 'react';
import { Input, FormBtn } from './Forma.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selector';
import { Notify } from 'notiflix';

export const Forma = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactsValue = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContacts = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(contact));
  };

  const handleSubmit = event => {
    event.preventDefault();
    const nameContacts = contactsValue.map(el => el.name.toLowerCase());
    if (nameContacts.includes(name.toLowerCase())) {
      Notify.info(`${name} is in your contacts`);
    } else {
      addContacts(name, number);
      reset();
    }
  };

  const handleNameTelChange = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleNameTelChange}
          />
        </label>

        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleNameTelChange}
          />
        </label>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    </>
  );
};
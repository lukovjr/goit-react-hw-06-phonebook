import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact: (state, { payload }) => {
      return (state = [...state, payload]);
    },
    deleteContacts: (state, { payload }) => {
      return (state = state.filter(contact => contact.id !== payload));
    },
  }, 
  
});


export const contactReducer = contactSlice.reducer;

export const { addContact, deleteContacts } = contactSlice.actions;

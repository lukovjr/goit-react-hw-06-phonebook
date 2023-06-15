import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { combineReducers } from 'redux';

export const reducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

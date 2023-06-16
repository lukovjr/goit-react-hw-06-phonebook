import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    addValue: (state, actions) => {
      return actions.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { addValue } = filterSlice.actions;

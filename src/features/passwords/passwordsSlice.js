import { createSlice } from '@reduxjs/toolkit';

let nextId = 2;

const initialState = {
  value: [
    { id: 1, password: 'hello', name: 'test' }
  ],
};

const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
    addPassword: (state, action) => {
      state.value.push({ id: nextId++, ...action.payload });
    },
    deletePassword: (state, action) => {
      state.value = state.value.filter(password => password.id !== action.payload);
    },
  },
});

export const { addPassword, deletePassword } = passwordsSlice.actions;
export default passwordsSlice.reducer;
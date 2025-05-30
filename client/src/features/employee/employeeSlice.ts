import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEmployee: localStorage.getItem('selectedEmployee')
    ? JSON.parse(localStorage.getItem('selectedEmployee') || '{}')
    : null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
      localStorage.setItem('selectedEmployee', JSON.stringify(action.payload));
    },
  },
});

export const { addSelectedEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;

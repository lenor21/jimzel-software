import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEmployee: localStorage.getItem('selectedEmployee')
    ? JSON.parse(localStorage.getItem('selectedEmployee') || '[]')
    : [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
      localStorage.setItem('selectedEmployee', JSON.stringify(action.payload));
    },
  },
});

export const { setSelectedEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;

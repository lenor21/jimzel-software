import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedEmployee: null,
  // selectedEmployee: localStorage.getItem('selectedEmployee') ? JSON.parse(localStorage.getItem('selectedEmployee') || '{}') : null,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
      // localStorage.setItem('selectedEmployee', JSON.stringify(action.payload));
    },
    clearSelectedEmployee: (state) => {
      state.selectedEmployee = null;
    },
  },
});

export const { addSelectedEmployee, clearSelectedEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;

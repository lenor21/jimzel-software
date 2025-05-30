import { apiSlice } from '../apiSlice';

const EMPLOYEES_URL = '/api/employees';

export const employeesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: (data) => ({
        url: `${EMPLOYEES_URL}?page=${data.page}&limit=${data.limit}`,
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),
  }),
});

export const { useGetEmployeesQuery } = employeesApiSlice;

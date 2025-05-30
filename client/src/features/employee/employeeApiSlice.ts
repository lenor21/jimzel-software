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
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `${EMPLOYEES_URL}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
});

export const { useGetEmployeesQuery, useDeleteEmployeeMutation } = employeesApiSlice;

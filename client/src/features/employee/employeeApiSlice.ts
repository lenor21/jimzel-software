import { apiSlice } from '../apiSlice';

const EMPLOYEES_URL = '/api/employees';

export const employeesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeesCSV: builder.query({
      query: () => ({
        url: `${EMPLOYEES_URL}/csv`,
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),
    getEmployees: builder.query({
      query: (data) => ({
        url: `${EMPLOYEES_URL}?page=${data.page}&limit=${data.limit}`,
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),
    addEmployee: builder.mutation({
      query: (data) => ({
        url: `${EMPLOYEES_URL}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Employee'],
    }),
    getEmployee: builder.query({
      query: (id) => ({
        url: `${EMPLOYEES_URL}/${id}`,
        method: 'GET',
      }),
      providesTags: ['Employee'],
    }),
    updateEmployee: builder.mutation({
      query: (data) => ({
        url: `${EMPLOYEES_URL}/${data.id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Employee'],
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

export const {
  useGetEmployeesCSVQuery,
  useGetEmployeesQuery,
  useAddEmployeeMutation,
  useGetEmployeeQuery,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeesApiSlice;

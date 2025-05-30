import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/apiSlice';
import counterReducer from '../features/counter/counterSlice';
import employeeReducer from '../features/employee/employeeSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

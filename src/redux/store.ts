import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './features/carsSlice';
import { authReducer } from './features/authSlice';
import { ordersReducer } from './features/ordersSlice';

export const store = configureStore({
  reducer: { cars: carsReducer, auth: authReducer, orders: ordersReducer },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

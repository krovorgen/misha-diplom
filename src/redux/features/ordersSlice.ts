import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';

export type OrderType = {
  id: number;
  status: 'Одобрено' | 'Отказано';
  client_name: string;
  car: {
    id: number;
    model: string;
    year: number;
    enginePower: number;
    price: number;
    transmission: string;
    speedMax: number;
    image: string;
  };
};

export const getOrders = createAsyncThunk('orders/getOrders', async (id: number) => {
  const response = await api.getOrders(id);
  return response.data;
});

const initialState: OrderType[] = [];

const slice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrders.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = slice.actions;

export const ordersReducer = slice.reducer;

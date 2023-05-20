import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../api';

export type CarType = {
  id: number;
  model: string;
  year: string;
  enginePower: string;
  price: string;
  transmission: string;
  speedMax: string;
  image: string;
};

export const getCars = createAsyncThunk('cars/getCars', async () => {
  const response = await api.getCars();
  return response.data;
});

const initialState: CarType[] = [];

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCars.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const carsReducer = slice.reducer;

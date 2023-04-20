import { createSlice } from '@reduxjs/toolkit';

export type CarType = {
  model: string;
  year: string;
  enginePower: string;
  price: string;
};

const initialState: CarType[] = [
  { model: 'bmw m3', enginePower: '600', price: '600$/h', year: '2016' },
  { model: 'bmw m4', enginePower: '700', price: '200$/h', year: '2018' },
];

const slice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const {} = slice.actions;

export const carsReducer = slice.reducer;

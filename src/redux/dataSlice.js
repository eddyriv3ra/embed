import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fakeData from '../mocks/dataMock.json'
import sleep from 'api';

const initialState = {
  data: [],
};

export const getDataAsync = createAsyncThunk(
  'data/getData',
  async () => {
    try {
      await sleep(2000);
      return fakeData
    } catch (error) {
      console.log(error);
    }
  }
);


export const DataSlice = createSlice({
  name: 'data',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDataAsync.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { searchValue } = DataSlice.actions;

export default DataSlice.reducer;
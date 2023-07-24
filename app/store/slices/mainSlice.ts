import {createSlice} from '@reduxjs/toolkit';

const mainRootSlice = createSlice({
  name: 'mainRoot',
  initialState: {
    catListing: [],
  },
  reducers: {
    storeCatListData: (state: {catListing: any}, action: {payload: any}) => {
      state.catListing = action.payload;
    },
    resetState: (state: {catListing: never[]}) => {
      state.catListing = [];
    },
  },
});

export const {resetState, storeCatListData} = mainRootSlice.actions;
export default mainRootSlice.reducer;

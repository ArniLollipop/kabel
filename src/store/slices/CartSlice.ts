import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface CartI {
  id: number;
  total_amount: number;
  user: number;
  items: any;
}

// Init
const name = "product";
const initialState: CartI = {
  id: 0,
  total_amount: 0,
  user: 0,
  items: null,
};

// Slice
const cartSlice = createSlice({
  name,
  initialState,

  reducers: {
    setItems: (state, action: PayloadAction<any>) => {
      state.items = action.payload;
    },

    setAmount: (state, action: PayloadAction<number>) => {
      state.total_amount = action.payload;
    },
  },
});

export const { setAmount, setItems } = cartSlice.actions;
export default cartSlice.reducer;

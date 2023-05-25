import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface CartI {
  id: number;
  total_amount: number;
  user: number;
  items: any;
  delivery_price: number;
}

// Init
const name = "product";
const initialState: CartI = {
  id: 0,
  total_amount: 0,
  user: 0,
  items: null,
  delivery_price: 0,
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

    setDelivery: (state, action: PayloadAction<number>) => {
      state.delivery_price = action.payload;
    },
  },
});

export const { setAmount, setItems, setDelivery } = cartSlice.actions;
export default cartSlice.reducer;

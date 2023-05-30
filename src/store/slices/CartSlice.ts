import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export interface CartI {
  id: number;
  total_amount: number;
  user: number;
  items: any;
  delivery_price: number;
  entity: any;
}

// Init
const name = "product";
const initialState: CartI = {
  id: 0,
  total_amount: 0,
  user: 0,
  items: null,
  delivery_price: 0,
  entity: {
    bin: "",
    current_account: "",
    entity_address: "",
    name_company: "",
  },
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
    setEntity: (state, action: PayloadAction<any>) => {
      state.entity = action.payload;
    },
  },
});

export const { setAmount, setItems, setDelivery, setEntity } =
  cartSlice.actions;
export default cartSlice.reducer;

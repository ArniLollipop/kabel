import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productAnswI, categoriesAnswI, coresI } from "@/types/ProductTypes";

interface productState {
  products: productAnswI | null;
  categories: categoriesAnswI | null;
  cores: coresI | null;
}

// Init
const name = "product";
const initialState: productState = {
  products: null,
  categories: null,
  cores: null,
};

// Slice
const productSlice = createSlice({
  name,
  initialState,

  reducers: {
    setProducts: (state, action: PayloadAction<productAnswI>) => {
      state.products = action.payload;
    },

    setCategories: (state, action: PayloadAction<categoriesAnswI>) => {
      state.categories = action.payload;
    },

    setCores: (state, action: PayloadAction<coresI>) => {
      state.cores = action.payload;
    },
  },
});

export const { setProducts, setCategories, setCores } = productSlice.actions;
export default productSlice.reducer;

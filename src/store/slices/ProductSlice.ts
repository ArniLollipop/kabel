import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productAnswI, categoriesAnswI, coresI } from "@/types/ProductTypes";

interface productState {
  products: productAnswI | null;
  categories: categoriesAnswI | null;
  cores: coresI | null;
  servicesWeight: null;
  pages: number;
  stateForQueris: string | null;
}

// Init
const name = "product";
const initialState: productState = {
  products: null,
  categories: null,
  cores: null,
  servicesWeight: null,
  pages: 0,
  stateForQueris: "a",
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
    setServicesWeight: (state, action: PayloadAction<any>) => {
      state.servicesWeight = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pages = action.payload;
    },
    setQuery: (state, action: PayloadAction<string>) => {
      state.stateForQueris = action.payload;
    },
  },
});

export const {
  setProducts,
  setCategories,
  setCores,
  setServicesWeight,
  setPage,
  setQuery,
} = productSlice.actions;
export default productSlice.reducer;

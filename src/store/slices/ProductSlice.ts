import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { productAnswI } from "@/types/ProductTypes";

interface productState {
  products: productAnswI | null;
}

// Init
const name = "product";
const initialState: productState = {
  products: null,
};

// Slice
const productSlice = createSlice({
  name,
  initialState,

  reducers: {
    setProducts: (state, action: PayloadAction<productAnswI>) => {
      state.products = action.payload;
    },
  },

  //   extraReducers: (builder) => {
  //     // createAd
  //     builder.addCase(createAd.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //       state.status = null;
  //     });
  //     builder.addCase(createAd.fulfilled, (state) => {
  //       state.loading = false;
  //       state.status = "fulfilled";
  //     });
  //     builder.addCase(createAd.rejected, (state, action: PayloadAction<unknown>) => {
  //       state.loading = false;
  //       state.error = action.payload;
  //       state.status = "rejected";
  //     });
  //   },
});

// Thunks
// export const createAd = createAsyncThunk(
//   `${name}/createAd`,
//   async (product: productRequest, { rejectWithValue }) => {
//     console.log("product from", product);

//     try {
//       const { data } = await ProductService().postProduct(product);

//       return data;
//     } catch (error) {
//       console.error("error inside productSlice: ", error);
//       return rejectWithValue(error);
//     }
//   }
// );

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;

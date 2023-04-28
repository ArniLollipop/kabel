import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "@/store/slices/ProductSlice";
import AuthSlice from "@/store/slices/AuthSlice";
import ProfileSlice from "./slices/ProfileSlice";
import CartSlice from "./slices/CartSlice";
// config the store

const store = configureStore({
  reducer: {
    AuthSlice,
    ProductSlice,
    ProfileSlice,
    CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

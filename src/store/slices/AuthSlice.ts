import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { userI } from "@/types/AuthTypes";
import { AxiosError } from "axios";
import { AuthService } from "@/services/Auth.service";

interface authState {
  userPhone: string;
  userName: string;
  user: userI | null;
  isLoggedIn: boolean;
  isLoading: boolean;
  isError: boolean;
  error: any;
}

// Init
const name = "auth";
const initialState: authState = {
  userPhone: "",
  userName: "",
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isError: false,
};

// Slice
const AuthSlice = createSlice({
  name,
  initialState,

  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },

    setUserPhone: (state, action: PayloadAction<string>) => {
      state.userPhone = action.payload;
    },

    setUser: (state, action: PayloadAction<userI>) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logOut: (state) => {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },

  extraReducers: (builder) => {
    // Login
    builder.addCase(Login.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(Login.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });

    builder.addCase(Login.rejected, (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });

    // Register
    builder.addCase(Register.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(Register.fulfilled, (state) => {
      state.isLoading = false;
      state.isLoggedIn = true;
    });

    builder.addCase(Register.rejected, (state, action: PayloadAction<unknown>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const Login = createAsyncThunk(
  `${name}/Login`,
  async ({ phone, pass }: { phone: string; pass: string }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await AuthService().logIn(phone, pass);
      dispatch(setUser(data));
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data));

      return data;
    } catch (error: any) {
      console.error("error inside AuthSlice:1 ", error);
      return rejectWithValue(Object.values(error.response.data)[0]);
    }
  }
);

export const Register = createAsyncThunk(
  `${name}/Register`,
  async (
    {
      phone,
      pass,
      first_name,
      sms_code,
    }: { phone: string; pass: string; first_name: string; sms_code: string },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const { data } = await AuthService().singUp(phone, pass, first_name, sms_code);

      dispatch(setUser(data));
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data));

      return data;
    } catch (error) {
      console.error("error inside productSlice: ", error);
      return rejectWithValue(error);
    }
  }
);

export const { setUser, logOut, setUserName, setUserPhone, setIsLoggedIn } = AuthSlice.actions;
export default AuthSlice.reducer;

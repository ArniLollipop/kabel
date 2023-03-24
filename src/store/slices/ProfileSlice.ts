import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { ProfileService } from '@/services/Profile.service';

export interface EditProfileProps {
  email?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  avatar?: any;
}

// Init
const name = 'profile';
const initialState = {
  user: null,
  isLoading: false,
  error: null,
  isError: false,
};

// Slice
const ProfileSlice = createSlice({
  name,
  initialState,

  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },

  extraReducers: (builder) => {
    // Login
    builder.addCase(EditProfile.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.error = null;
    });

    builder.addCase(EditProfile.fulfilled, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.user = action.payload;
    });

    builder.addCase(EditProfile.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload;
    });
  },
});

export const EditProfile = createAsyncThunk(
  `${name}/EditProfile`,
  async (
    {
      userId,
      values,
      avatar,
    }: { userId?: number | undefined; values?: EditProfileProps; avatar?: any },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const data = await ProfileService().editProfile(userId, values, avatar);
      console.log('data inside edit profile slice is: ', data);
      dispatch(setUser(data));
      localStorage.setItem('user', JSON.stringify(data));

      return data;
    } catch (error: any) {
      console.error('error inside AuthSlice:1 ', error);
      return rejectWithValue(Object.values(error.response.data)[0]);
    }
  }
);

export const { setUser } = ProfileSlice.actions;
export default ProfileSlice.reducer;

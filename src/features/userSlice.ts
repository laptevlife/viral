import { createSlice } from '@reduxjs/toolkit';

const initialState: any = {
  user: null,
  initDataUnsafe: null,
  tg: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTg(state, action) {
      state.tg = action.payload;
    },
    setInitDataUnsafe(state, action) {
      state.initDataUnsafe = action.payload;
    },
  },
});

export default userSlice.reducer;

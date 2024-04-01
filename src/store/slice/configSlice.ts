import { createSlice } from "@reduxjs/toolkit";
import { ConfigType } from "../../types";

const initialState = {
  lang: "en",
} as ConfigType;

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguage } = configSlice.actions;

export default configSlice.reducer;

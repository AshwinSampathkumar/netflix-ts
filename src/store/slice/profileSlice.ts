import { createSlice } from "@reduxjs/toolkit";
import { ProfileSliceType } from "../../types";

const initialState = {
  selectedProfile: null,
} as ProfileSliceType;

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    setSelectedProfile: (state, action) => {
      state.selectedProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedProfile } = profilesSlice.actions;

export default profilesSlice.reducer;

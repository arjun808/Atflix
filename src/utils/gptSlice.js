import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptOrNot: false,
  },
  reducers: {
    toggleGptView: (state) => {
      state.showGptOrNot = !state.showGptOrNot;
    },
  },
});
   export const { toggleGptView } = gptSlice.actions;
export default gptSlice.reducer;

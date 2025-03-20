import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.value = state.value === "dark" ? "light" : "dark";

      document.documentElement.style.setProperty("background-color", `var(--${state.value}-mode)`);
      document.documentElement.style.setProperty("color", `var(--${state.value}-mode-text)`);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { applyTheme } from "../../utils";

export type Theme = "dark" | "light" | "system";
type ThemeState = {
  theme: Theme;
};

const initilizeTheme = (): Theme => {
  const theme = (localStorage.getItem("theme") as Theme) || "system";
  applyTheme(theme);

  return theme;
};

const initialState: ThemeState = {
  theme: initilizeTheme(),
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem("theme", action.payload);
    },
  },
});

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;

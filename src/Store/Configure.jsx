import { configureStore } from "@reduxjs/toolkit";
import calSlice from "./CalSlice";

export const store = configureStore({
  reducer: {
    calculator: calSlice,
  },
});

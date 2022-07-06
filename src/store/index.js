import { configureStore } from "@reduxjs/toolkit";
import placeReducer from "./place.reducer";

export const store = configureStore({
  reducer: {
    place: placeReducer,
  },
});

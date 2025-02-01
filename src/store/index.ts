import { configureStore } from "@reduxjs/toolkit";

import Api from "services/Api";

const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer,
  },
  middleware: (GetDefaultMiddleware) =>
    GetDefaultMiddleware().concat(Api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
export default store

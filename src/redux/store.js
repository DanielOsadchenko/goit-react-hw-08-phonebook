
import { configureStore } from '@reduxjs/toolkit'
import { phonebookApi } from "./phonebookAPI"; 

export const store = configureStore({
  reducer: {

    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(phonebookApi.middleware),
})

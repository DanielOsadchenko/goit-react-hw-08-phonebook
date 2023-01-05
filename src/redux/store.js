
import { configureStore, } from '@reduxjs/toolkit'
import { phonebookApi } from "./phonebookAPI"; 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/slice';

const authPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(phonebookApi.middleware),
  devTools: process.env.NODE_ENV === 'development',
})

export const persistor = persistStore(store);

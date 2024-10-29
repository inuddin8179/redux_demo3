import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer  from '../slices/userSlice';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
const persistConfig = {
  key: 'user',
  storage,
};
const reducers = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
export const makeStore = () => {
    return configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware({
              serializableCheck: {
                  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
              },
          }),
    });
  };
  
  export type AppStore = ReturnType<typeof makeStore>;
  export type RootState = ReturnType<AppStore['getState']>;
  export type AppDispatch = AppStore['dispatch'];
  
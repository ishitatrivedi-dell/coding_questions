import { configureStore } from '@reduxjs/toolkit';
import appReducer from './userSlice';

export const store = configureStore({
  reducer: {
    app: appReducer
  }
});

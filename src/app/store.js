import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form'
import tokenSlice from '../pages/Token/tokenSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    manageToken: tokenSlice
  },
});

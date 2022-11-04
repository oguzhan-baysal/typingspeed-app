import { configureStore } from '@reduxjs/toolkit';

import wordSlice from './words/wordSlice.js';

export const store = configureStore({
  reducer: {
    words: wordSlice,
  },
});
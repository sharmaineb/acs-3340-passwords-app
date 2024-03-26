import { configureStore } from '@reduxjs/toolkit'
import passwordsReducer from '../features/passwords/passwordsSlice.js'
import { saveState, loadState } from './persistState.js';

export const store = configureStore({
    reducer: {
      passwords: passwordsReducer
    },
    preloadedState: loadState() 
  })

  store.subscribe(() => {
    saveState(store.getState());
  })
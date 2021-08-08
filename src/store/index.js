import { configureStore } from '@reduxjs/toolkit';

import storeSlice from './storeSlice';
import stateSlice from './stateSlice/stateSlice';

export default configureStore({
  reducer: {
    store: storeSlice,
    state: stateSlice,
  },
});

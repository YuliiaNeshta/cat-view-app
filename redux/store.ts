import { counterSlice } from '@/redux/features/limitSlice';
import { configureStore } from '@reduxjs/toolkit';
import { breedsApi } from '@/redux/apiRequest/breedsApi';

export const store = configureStore({
  reducer: {
    [breedsApi.reducerPath]: breedsApi.reducer,
    limit: counterSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(breedsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

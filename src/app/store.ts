import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import countryReducer from '../slices/CountrySlice';

export const store = configureStore({
  reducer: {
    country: countryReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

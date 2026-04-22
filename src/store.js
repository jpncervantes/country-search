import { configureStore } from '@reduxjs/toolkit'
import countryReducer from './slice/appSlice'
import { countryApi } from './slice/apiSlice'

export default configureStore({
  reducer: {
    country: countryReducer,
    [countryApi.reducerPath]: countryApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(countryApi.middleware)
})

import { configureStore } from '@reduxjs/toolkit'


import cartReducer from './slices/cartSlices';
import searchReducer from './slices/searchSlice'

export const mystore = configureStore({
  reducer: { 
    cart:cartReducer,
    search:searchReducer

  }
})
export default mystore
import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState = {

 cartValue:[]
}

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    

    addInCart:function(state,action){
      console.log("addInCart func called");

    },

     removeCart:function(state,action){
      console.log("addInCart func called");

    },

  
    },
   
  }
);

// Action creators are generated for each case reducer function
export const { addInCart,removeCart} = cartSlice.actions

export default cartSlice.reducer
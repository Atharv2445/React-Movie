import { createSlice } from '@reduxjs/toolkit'



// Define the initial state using that type
const initialState = {

 movieName:''
}

export const searchSlice = createSlice({
  name: 'search',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeMovieName:function(state, action){

        console.log('changeMovieName func called');
        state.movieName=action.payload;
    }

  
    },
   
  }
);

// Action creators are generated for each case reducer function
export const { changeMovieName } = searchSlice.actions

export default searchSlice.reducer
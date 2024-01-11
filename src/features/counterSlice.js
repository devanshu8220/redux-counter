import { createSlice } from "@reduxjs/toolkit";
const initialValue={counter:0}
const counterSlice=createSlice({
    name:'counterValues',
    initialState:initialValue,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        }
    }
})
export const {increment,decrement}=counterSlice.reducer;
export default counterSlice.reducer
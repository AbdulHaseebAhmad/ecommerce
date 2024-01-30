import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter:false,
    filterValue:"Mountain Bikes"
}

const filterslice = createSlice({
    name:'filterSlice',
    initialState:initialState,
    reducers:{
        filterProducts (state,action) {
            state.filter = true;
            console.log(state.filter);

        },
        unFilterProducts (state,action) {
            state.filter = false;
            console.log(state.filter);
        }
    }
})


export const filterActions = filterslice.actions;
export default filterslice.reducer;
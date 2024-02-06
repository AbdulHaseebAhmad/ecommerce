import { createSlice } from "@reduxjs/toolkit";

const initialCartState= {
    cart:[],
    numberOfItems:0,
}

const cartSlice = createSlice({
    name:'cartSlice',
    initialState:initialCartState,
    reducers:{
        addProductToCart (state,action) {
            state.numberOfItems++;
            if (state.cart.length === 0){
                state.cart.push(action.payload);}
            else{
                const existingProduct = state.cart.find((eachProduct)=>{return eachProduct.name === action.payload.name})
                if(existingProduct){
                    existingProduct.quantity++;
                }
                else {
                    state.cart.push(action.payload)
                }
            }
        },
        removeProductFromCart (state,action) {
            const existingProduct = state.cart.find((eachProduct)=>{return eachProduct.name === action.payload.name});
            if(existingProduct){            
                if(existingProduct.quantity > 1){
                    existingProduct.quantity--
                }
                else {
                    state.cart = state.cart.filter(eachProduct => {return eachProduct.name != action.payload.name})
                }
                state.numberOfItems--;
            }
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
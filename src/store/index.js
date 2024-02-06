import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter-slice";
import cartReducer from "./cart-slice";

const Store = configureStore({
    reducer : {filter:filterReducer,cart:cartReducer}
}); 

export default Store;
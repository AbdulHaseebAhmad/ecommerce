import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filter-slice";

const Store = configureStore({
    reducer : {filter:filterReducer}
}
    
); 

export default Store;
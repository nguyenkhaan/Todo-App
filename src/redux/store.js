import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./slices/todoSlice";
import { filterSlice } from "./slices/filterSlice";
const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer, 
        filter: filterSlice.reducer
    }
})

export default store 
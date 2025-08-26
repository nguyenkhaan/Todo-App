import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo', 
    initialState: [],  //id , name , completed , priority 
    reducers: {
        addtodo: (state , action) => {
            state.push(action.payload) 
        }, 
        toggletodo: (state , action) => {
            const id = action.payload 
            const currentTodo = state.filter(todo => todo.id == id) 
            currentTodo.completed = !currentTodo.completed 
        }
    }
})
export {todoSlice}
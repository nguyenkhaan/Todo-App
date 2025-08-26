import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name: 'filter', 
    initialState: {
        search: '', 
        priority: [], 
        status: 'All'
    }, 
    reducers: {
        filterSearchChange: (state , action) => {
            state.search = action.payload
        }, 
        filterProrityChange: (state , action) => {
            state.priority = action.payload
        }, 
        filterStatusChange: (state , action) => {
            state.status = action.payload
        }
    }
})

export {filterSlice}
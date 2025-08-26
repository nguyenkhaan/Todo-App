import { createSelector } from "@reduxjs/toolkit";
const todoList = state => state.todoList 
const filterSearch = state => state.filter.search 
const filterPriority = state => state.filter.priority 
const filterStatus = state => state.filter.status 

const todoSelector = createSelector([todoList , filterSearch , filterPriority , filterStatus] , 
    (todoList , search , priority , status) => {
        const remainTodos = todoList.filter(todo => {
            return todo.name.includes(search) && (priority.length == 0 || priority.includes(todo.priority))
        })
        switch (status) {
            case 'All':
                return remainTodos 
            case 'To do': 
                return remainTodos.filter(todo => todo.completed == false)
            case 'Completed': 
                return remainTodos.filter(todo => todo.completed == true)
            default:
                return remainTodos
        }
    }
)
export default todoSelector 
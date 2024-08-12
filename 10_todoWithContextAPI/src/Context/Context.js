import { createContext, useContext } from "react";

export const todoContext = createContext({
    todos: [
        {
            id : 1,
            message : "First To Do",
            completed: false
        }
    ],
    addTodo : (todo) => {

    },
    updateTodo : (id, todo) => {

    },
    deleteTodo : (id) => {

    },
    toggleComplete : (id) => {}
});

export const TodoContextProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext); 
}


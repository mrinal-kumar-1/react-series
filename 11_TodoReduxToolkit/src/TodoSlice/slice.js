import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos:  [
          {id: 1, message:"", completed: false}
    ]
}

export const todoSlice = createSlice(
    {
        name: todo,
        initialState,
        reducers: {
            addTodo: (state, action) => {
                   const todo = {
                    id: nanoid,
                    message: action.payload.message,
                    completed: false
                   }

                   state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((val) => val.id != action.payload.id)
            },
            updateTodo: (state, action) => {
                state.todos = state.todos.map((val) => (val.id == action.payload.id ? val.message = action.payload.message : val))
            }
        }

    }
)

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
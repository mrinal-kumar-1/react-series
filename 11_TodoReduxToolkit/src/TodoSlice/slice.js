import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos:  [
          {id: 1, message:"Hello Guys", completed: false}
    ]
}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                   const todo = {
                    id: nanoid,
                    message: action.payload,
                    completed: false
                   }

                   state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((val) => val.id != action.payload)
            },
            updateTodo: (state, action) => {
                state.todos = state.todos.map((val) => (val.id == action.payload ? val.message = action.payload : val))
            }
        }

    }
)

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer
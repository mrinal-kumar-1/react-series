import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
  todos:  [
          {id: 1, message:"Hello Guys", completed: false}
    ],
    editingTodo : null,
}

export const todoSlice = createSlice(
    {
        name: 'todo',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                   const todo = {
                    id: nanoid(),
                    message: action.payload,
                    update: false
                   }

                   state.todos.push(todo)
            },
            removeTodo: (state, action) => {
                state.todos = state.todos.filter((todo) => todo.id !== action.payload )
            },
            updateTodo: (state, action) => {
                const {id, newMessage} = action.payload
                const todo = state.todos.find((todo) => todo.id == id)
                if(todo){
                    todo.message = newMessage;
                }

                state.editingTodo = null
            },
            setEditingTodo : (state, action) => {
                state.editingTodo = action.payload
            }
        }

    }
)

export const {addTodo, removeTodo, updateTodo, setEditingTodo} = todoSlice.actions

export default todoSlice.reducer
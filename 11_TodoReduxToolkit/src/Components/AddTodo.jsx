import { useEffect, useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, updateTodo, setEditingTodo } from "../TodoSlice/slice"

export default function AddTodo(){

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const editingTodo = useSelector(state => state.editingTodo)

    useEffect(() => {

      if(editingTodo){
        setInput(editingTodo.message)
      }
      
}, [editingTodo])

    const addTodoHandler = (e) => {
          e.preventDefault()
          dispatch(
             addTodo(input)
          )
          setInput('')
    }

    const updateHandler = (e) => {
      e.preventDefault()
      
      dispatch(
        updateTodo({id: editingTodo.id, newMessage: input})
      )
      setInput('')
    }

    // const [updatable, isUpdatable] = useState(false)
    const cancelUpdateHandler = () => {
      dispatch(setEditingTodo(null));
      setInput('');
    };

    return(
        <form onSubmit={editingTodo? updateHandler: addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          placeholder="Enter a Todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {editingTodo? 'Update': 'Add Todo'}
        </button>
        {editingTodo && (
        <button
          type="button"
          onClick={cancelUpdateHandler}
          className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg"
        >
          Cancel
        </button>
      )}
      </form>
    )
}

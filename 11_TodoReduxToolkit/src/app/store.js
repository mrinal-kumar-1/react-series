import {configureStore} from '@reduxjs/toolkit'
import todoReducer  from '../TodoSlice/slice'


export const store = configureStore({
    reducer: todoReducer
})


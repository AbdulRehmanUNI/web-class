import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const taskSlice = createSlice({
    name:"task",
    initialState,
    reducers:{
        addTask(state, action){
            state.push(action.payload)
        },
        removeTask(state, action){
            return state.filter((task)=> task.id != action.payload.id)
        }
    }
})

export const {addTask, removeTask} = taskSlice.actions
export default taskSlice.reducer
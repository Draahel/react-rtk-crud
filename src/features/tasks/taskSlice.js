import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "First Task",
        description: "First Description",
        completed:false,
    },
    {
        id: 2,
        title: "Second Task",
        description: "Second Description",
        completed:false,
    }
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers:{
        addTask: ( state, action ) => {
            state.push(action.payload)
        },
        updateTask: ( state, action ) => {
            const { title, description, id } = action.payload;
            const taskFound = state.find(task => task.id === id);
            if (taskFound) {
                taskFound.title = title;
                taskFound.description = description
            }
        },
        deleteTask:( state, action ) => {
            const taskFound = state.find(task => task.id === action.payload);
            if (taskFound) {
                state.splice(state.indexOf(taskFound),1);
            }
        }
    },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
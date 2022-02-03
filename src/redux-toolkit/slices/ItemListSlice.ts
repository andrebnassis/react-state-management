import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ITodoItem } from '../../components/ITodoItem';

const initialState:Array<ITodoItem> = [];
const ItemListSlice = createSlice({
    name:"itemListSlice",
    initialState,
    reducers:{
        addItem:(state, action:PayloadAction<{title:string}>) => {
            const newItem = {
                id: Date.now(), 
                title: action.payload.title, 
                completed: false
            }
            state.push(newItem);
            return state;
        },
        removeItem: (state, action:PayloadAction<{id:number}>) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        updateCompletedItem: (state, action:PayloadAction<{id: number, completed: boolean}>) => {
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index].completed = action.payload.completed;
            return state;
        }
    }
})

export const { addItem, removeItem, updateCompletedItem } = ItemListSlice.actions;
export const ItemListSliceReducer = ItemListSlice.reducer;
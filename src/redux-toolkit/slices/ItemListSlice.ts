import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';
import { ITodoItem } from '../../components/ITodoItem';

const initialState:Array<ITodoItem> = [];

const loadItemListAsync = createAsyncThunk('itemListSlice/loadItemListAsync', async () => {
    const result = await axios.get("http://localhost:9000/todos");
    if(result.status === 200){
        return {itemList: result.data};
    }
})

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
    },
    extraReducers:{
        [loadItemListAsync.fulfilled as any]:(state, action:PayloadAction<{itemList:Array<ITodoItem>}>) => {
            console.log('success');
            return action.payload.itemList;
        },
        [loadItemListAsync.pending as any]: (state, action) => {
            console.log('loading...');
        },
        [loadItemListAsync.rejected as any]:(state, action) => {
            console.log('error');
            return [];
        }
    }
})

export { loadItemListAsync };
export const { addItem, removeItem, updateCompletedItem } = ItemListSlice.actions;
export const ItemListSliceReducer = ItemListSlice.reducer;
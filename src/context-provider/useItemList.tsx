import axios from "axios";
import { useContext } from "react";
import { ITodoItem } from "../components/ITodoItem";
import { ItemListContext } from "./ItemListContextProvider";

//Step 6: Create the custom hook that will handle with the reducer, improving readability of your code.

export const useItemList = ():{
    data:Array<ITodoItem>;
    addItem: (title:string) => void;
    removeItem: (id:number) => void;
    updateCompletedItem: (id:number, completed:boolean) => void;
    loadItemlistAsync: () => Promise<void>;
    addItemAsync: (title:string) => Promise<void>
    removeItemAsync: (id:number) => Promise<void>
    updateCompletedItemAsync: (id:number, completed:boolean) => Promise<void>;
} => {

    const context = useContext(ItemListContext);
    if (!context) {
        throw new Error('ItemListContext must be used within ItemListContextProvider');
    }

    const { state, dispatch } = context;

    const loadItemlistAsync = async ():Promise<void> => {
        const result = await axios.get("http://localhost:3000/todos");
        if(result.status === 200){
            dispatch({type: 'LOAD_DATA', payload:{ itemList: result.data}})
        }
        
    }

    const removeItemAsync = async (id:number):Promise<void> => {
        await axios.delete(`http://localhost:3000/todos/${id}`);
        await loadItemlistAsync();
    }

    const addItemAsync = async (title:string):Promise<void> => {
        await axios.post(`http://localhost:3000/todos`, { title })
        await loadItemlistAsync();
    }

    const updateCompletedItemAsync = async (id:number, completed:boolean):Promise<void> => {
        await axios.patch(`http://localhost:3000/todos/${id}`, { completed })
        await loadItemlistAsync();
    }

    const addItem = (title:string):void => {
        dispatch({type: 'ADD_ITEM', payload:{title}});
    }

    const removeItem = (id:number):void => {
        dispatch({type: 'REMOVE_ITEM', payload:{id}})
    }

    const updateCompletedItem = (id:number, completed:boolean):void => {
        dispatch({type: 'UPDATE_COMPLETE', payload:{id, completed}})
    }

    const result = {
        data: state,
        loadItemlistAsync,
        addItemAsync,
        removeItemAsync,
        updateCompletedItemAsync,
        addItem, 
        removeItem,
        updateCompletedItem
    };

    return result;


}
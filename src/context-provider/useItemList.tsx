import { useContext } from "react";
import { ITodoItem } from "../components/ITodoItem";
import { ItemListContext } from "./ItemListContextProvider";

//Step 6: Create the custom hook that will handle with the reducer, improving readability of your code.

export const useItemList = ():{
    data:Array<ITodoItem>;
    addItem: (title:string) => void;
    removeItem: (id:number) => void;
    updateCompletedItem: (id:number, completed:boolean) => void
} => {

    const context = useContext(ItemListContext);
    if (!context) {
        throw new Error('ItemListContext must be used within ItemListContextProvider');
    }

    const { state, dispatch } = context;

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
        addItem, 
        removeItem,
        updateCompletedItem
    };

    return result;


}
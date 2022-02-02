import { useContext } from "react";
import { ITodoItem } from "../components/ITodoItem";
import { ItemListContext } from "./ItemListContextProvider";

//Step 6: Create the custom hook that will handle with the reducer, improving readability of your code.

export const useItemList = ():{
    data:Array<ITodoItem>
} => {

    const context = useContext(ItemListContext);
    if (!context) {
        throw new Error('ItemListContext must be used within ItemListContextProvider');
    }

    const { state, dispatch } = context;

    const result = {
        data: state,
    };

    return result;


}
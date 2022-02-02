import React, { createContext, useMemo, useReducer } from "react"
import { ITodoItem } from "../components/ITodoItem"

interface IItemListContextValue {
    state: Array<ITodoItem>; 
    dispatch: React.Dispatch<ItemListAction>;
}

//Step 1: Create the context with the target data's reducer type. Initialize it with null.
const ItemListContext = createContext<IItemListContextValue|undefined>(undefined);


//Step 2: Create the reducer                                        
// Inside the reducer, we will create the actions that will update the state.

export type ItemListAction = |{
    type: 'LOAD_DATA',
    payload: {
        itemList: Array<ITodoItem>
    }
}
| {
    type: 'ADD_ITEM';
    payload: { title: string };
} 
| {
    type: 'REMOVE_ITEM';
    payload: { id: number };
} 
| {
    type: 'UPDATE_COMPLETE';
    payload: {id: number, completed: boolean}
}
;

const ItemListReducer = (state:Array<ITodoItem>, action: ItemListAction):Array<ITodoItem> => {
    switch(action.type){
        case 'LOAD_DATA':
            return [...action.payload.itemList]
        case 'ADD_ITEM':
            const item:ITodoItem = {
                id:Date.now(),
                title: action.payload.title,
                completed: false
            }
            return [...state, item]
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload.id);
        case 'UPDATE_COMPLETE':
            const index = state.findIndex(item => item.id === action.payload.id);
            state[index].completed = action.payload.completed;
            return [...state];
        default:
            return [...state];
    }
}

//Step 3: Create the ContextProvider

const ItemListContextProvider:React.FC = (props) => {
    const itemListInitialData:Array<ITodoItem> = [];
    const [state, dispatch] = useReducer(ItemListReducer, itemListInitialData);

    //Returns a new object {state, dispatch} everytime state changes
    const value:IItemListContextValue = useMemo(() => ({state, dispatch}), [state]);

    return (<ItemListContext.Provider value={value} {...props}/>);
} 

//Step 4: export Context and its ContextProvider
export {ItemListContext, ItemListContextProvider};

/*
The pattern is completed, and you could declare:
-----------------------------------
<ItemListContextProvider> 
    <App />
</ItemListContextProvider> 
-----------------------------------

And inside any component that is directly or indirectly down the provider, 
you could use:
-----------------------------------
const { state, dispatch } = useContext(HomeContext);
-----------------------------------

BUT, you can improve the way of using it by creating a customHook, that will encapsulate the reducer usage, and you will use the customHook instead.
This will give a better readability on your code.
So, let's do it!

//Step 5: Create a useItemList.tsx file 
*/


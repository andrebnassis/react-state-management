import React, { createContext, useMemo, useReducer } from "react"
import { ITodoItem } from "../components/ITodoItem"

//Step 1: Create the context with the target data's reducer type. Initialize it with null.
const ItemListContext = createContext<
                                        {   state: Array<ITodoItem>; 
                                            dispatch: React.Dispatch<any>;
                                        }|null>(null);


//Step 2: Create the reducer                                        
// Inside the reducer, we will create the actions that will update the state.
const ItemListReducer = (state:Array<ITodoItem>, action: any):Array<ITodoItem> => {
    switch(action.type){
        case 'ADD_ITEM':
            const item:ITodoItem = {
                id:Date.now(),
                title: action.payload.title,
                completed: false
            }
            return [...state, item]
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload.id);
        default:
            return [...state];
    }
}

//Step 3: Create the ContextProvider

const ItemListContextProvider:React.FC = (props) => {
    const itemListInitialData:Array<ITodoItem> = [];
    const [state, dispatch] = useReducer(ItemListReducer, itemListInitialData);

    //Returns a new object {state, dispatch} everytime state changes
    const value = useMemo(() => ({state, dispatch}), [state]);

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


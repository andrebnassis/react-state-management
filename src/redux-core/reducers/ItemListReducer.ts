import { ITodoItem } from "../../components/ITodoItem";

type ItemListAction = |{
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

const ItemListReducer = (state:Array<ITodoItem> = [], action: ItemListAction):Array<ITodoItem> => {
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

export default ItemListReducer;
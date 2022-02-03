import { ITodoItem } from "../../components/ITodoItem";

type ItemListAction = 
|{
    type: 'LOAD_DATA_REQUEST',
}
|{
    type: 'LOAD_DATA_SUCCESS',
    payload: {
        itemList: Array<ITodoItem>
    }
}
|{
    type: 'LOAD_DATA_FAILURE',
    error: any
}
|{
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

interface IState {
    itemList: Array<ITodoItem>,
    error: any
}

const initialState = {
    itemList: [],
    error: null
}

const ItemListReducer = (state:IState = initialState, action: ItemListAction):IState => {
    switch(action.type){
        case 'LOAD_DATA_REQUEST':
            console.log('loading...');
            return {...state};
            case 'LOAD_DATA_SUCCESS':
                console.log('success');
                return {...state, 
                    itemList: [...action.payload.itemList]
                }
            case 'LOAD_DATA_FAILURE':
                console.log('failure');
                return {...state, itemList: [], error: action.error}
        case 'LOAD_DATA':
            return {...state, 
                itemList: [...action.payload.itemList]
            }
        case 'ADD_ITEM':
            const item:ITodoItem = {
                id:Date.now(),
                title: action.payload.title,
                completed: false
            }
            return {...state,
                itemList: [...state.itemList, item]
            }
        case 'REMOVE_ITEM':
            return {...state,
                itemList: state.itemList.filter((item) => item.id !== action.payload.id)
            }
        case 'UPDATE_COMPLETE':
            const index = state.itemList.findIndex(item => item.id === action.payload.id);
            state.itemList[index].completed = action.payload.completed;
            return {...state};
        default:
            return {...state};
    }
}

export default ItemListReducer;
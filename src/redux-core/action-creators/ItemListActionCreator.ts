import axios from 'axios';
import {AppDispatch, RootState} from '../store'

export const loadItemlist = () => {
    return async (dispatch:AppDispatch, getState:RootState) => {
        
        const result = await axios.get("http://localhost:9000/todos");
        if(result.status === 200)
        {
            dispatch({type: 'LOAD_DATA', payload:{ itemList: result.data}})    
        }
    }
}

export const addItem = (title:string) => {
    return (dispatch:AppDispatch) => {
        dispatch({type: "ADD_ITEM",
                 payload: {
                     title
                 }})
    }
}

export const removeItem = (id:number) => {
    return (dispatch:AppDispatch) => {
        dispatch({type: "REMOVE_ITEM",
                 payload: {
                     id
                 }})
    }
}

export const updateCompletedItem = (id:number, completed:boolean) => {
    return (dispatch:AppDispatch) => {
        dispatch({type: "UPDATE_COMPLETE", 
        payload: {
            id, 
            completed
        }})
    }
}
import axios from 'axios';
import {AppDispatch, RootState} from '../store'

export const loadItemlist = () => {
    return async (dispatch:AppDispatch, getState:RootState) => {
        
        dispatch({type: 'LOAD_DATA_REQUEST'});

        try{
            const result = await axios.get("http://localhost:9000/todos");
            dispatch({type: 'LOAD_DATA_SUCCESS', payload:{ itemList: result.data}})    
        }
        catch(err){
            dispatch({type: 'LOAD_DATA_FAILURE', error: err})    
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
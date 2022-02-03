import {AppDispatch} from '../store'

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
import {configureStore} from '@reduxjs/toolkit'
import {ItemListSliceReducer} from '../slices/ItemListSlice'

const store = configureStore({
    reducer:{
        itemListInfo: ItemListSliceReducer
    },

});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
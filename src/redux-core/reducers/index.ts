import { combineReducers } from "redux";
import ItemListReducer from "./ItemListReducer";

const reducers = combineReducers({
    itemListInfo: ItemListReducer
})

export default reducers;
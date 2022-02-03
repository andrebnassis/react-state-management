import { combineReducers } from "redux";
import ItemListReducer from "./ItemListReducer";

const reducers = combineReducers({
    itemList: ItemListReducer
})

export default reducers;
import {combineReducers} from "redux";
import reducer from "./Reducer";

const reducers =combineReducers({
    todos : reducer
});
export default reducers ;
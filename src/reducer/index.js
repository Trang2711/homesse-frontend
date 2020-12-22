import { combineReducers } from "redux";
import postReducer from './post_reducer';
import userReducer from "./user_reducer";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer
});

export default rootReducer;
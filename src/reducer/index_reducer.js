import { combineReducers } from "redux";
import postReducer from './post_reducer';

const reducer = combineReducers({
    post: postReducer,
});

export default reducer;
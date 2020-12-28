import { combineReducers } from "redux";
import postReducer from './post_reducer';
import userReducer from "./user_reducer";
import searchData_reducer from "./searchData_reducer";
import postPriceReducer from './postPrice_reducer';

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    searchData: searchData_reducer,
    postPrice: postPriceReducer
});

export default rootReducer;
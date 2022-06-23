import { combineReducers } from "redux";
import { mainReducer } from "./mainReducer";
import { loaderReducer } from "./loaderReducer";

const rootReducer = combineReducers({
  mainReducer: mainReducer,
  loaderReducer: loaderReducer,
});

export default rootReducer;

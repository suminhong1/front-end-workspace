// 루트 리듀서로 만들기
import { combineReducers } from "redux";
import counter from "./modules/counter.js";
const rootReducer = combineReducers({
  counter,
});
export default rootReducer;

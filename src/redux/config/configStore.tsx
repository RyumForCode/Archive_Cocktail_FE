import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
});
const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof rootReducer>;
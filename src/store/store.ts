import {applyMiddleware, combineReducers, createStore} from "redux";
import {egrnInfoReducer} from "./reucers/egrnInfoReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    egrnInfoData: egrnInfoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
// export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer, applyMiddleware(thunk));
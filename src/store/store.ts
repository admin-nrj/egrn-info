import {applyMiddleware, combineReducers, createStore} from "redux";
import {egrnInfoReucer} from "./reucers/egrnInfoReucer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    egrnInfoData: egrnInfoReucer
})

export type RootReducer = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export const store = createStore(rootReducer, applyMiddleware(thunk));
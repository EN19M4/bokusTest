import { combineReducers } from "redux";
import {createStore, applyMiddleware} from "redux";
import repos from "./repos";
import descriptions from "./descriptions";
import createSagaMiddleware from "redux-saga";
import {descriptionsWatcher} from "./sagaJson"
import description from "./elementDescription";

const sagaMiddleware = createSagaMiddleware()

const rootReduser = combineReducers({
    repos,
    descriptions,
    description
})

export const store = createStore(rootReduser, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(descriptionsWatcher)
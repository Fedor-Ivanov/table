import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()

export default createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)

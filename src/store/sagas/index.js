import { all } from "redux-saga/effects"
import { rowWatcher } from './rowsSaga'

function* rootSaga() {
    yield all([rowWatcher()])
}

export default rootSaga;
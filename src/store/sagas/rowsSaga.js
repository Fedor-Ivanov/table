import { call, put, takeEvery } from 'redux-saga/effects';
import {
    loadingData,
    setData,
    ACTION_GET_DATA,
    ACTION_ADD_ROW,
    createRow,
    ACTION_REMOVE_ROW,
    deleteRow,
    ACTION_UPD_ROW,
    updateRow
} from '../actions'
import Api from '../../api'

function* getTableDataWorker() {
    yield put(loadingData(true));
    try {
        const { data } = yield call(Api.get);
        yield put(setData(data));
        yield put(loadingData(false));
    } catch (error) {
        console.log(error.message);
        yield put(loadingData(false));
    }
}

function* newTableRowWorker() {
    yield put(loadingData(true));
    try {
        const { data } = yield call(Api.post, '', { name: "", surname: "", city: "" });
        yield put(createRow(data));
        yield put(loadingData(false));
    } catch (error) {
        console.log(error.message);
        yield put(loadingData(false));
    }
}

function* deleteTableRowWorker({ payload }) {
    yield put(loadingData(true));
    try {
        const { data } = yield call(Api.delete, payload);
        yield put(deleteRow(data.id));
        yield put(loadingData(false));
    } catch (error) {
        console.log(error.message);
        yield put(loadingData(false));
    }
}

function* updateTableRowWorker({ row }) {
    yield put(loadingData(true));
    try {
        const { data } = yield call(Api.put, row.id, row);
        yield put(updateRow(data));
        yield put(loadingData(false));
    } catch (error) {
        console.log(error.message);
        yield put(loadingData(false));
    }
}

export function* rowWatcher() {
    yield takeEvery(ACTION_GET_DATA, getTableDataWorker);
    yield takeEvery(ACTION_ADD_ROW, newTableRowWorker);
    yield takeEvery(ACTION_REMOVE_ROW, deleteTableRowWorker);
    yield takeEvery(ACTION_UPD_ROW, updateTableRowWorker);
}


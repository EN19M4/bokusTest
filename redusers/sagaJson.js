import {put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_DESCRIPTIONS, setDescriptions } from './descriptions'

const fetchDescriptionsApi = () => fetch("https://cors-anywhere.herokuapp.com/http://z.bokus.ru/test.json", {headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }})

function* fetchDescriptionsWorker() {
    const data = yield call(fetchDescriptionsApi)
    const json = yield call(() => data.json())
    yield put(setDescriptions(json))
}

export function* descriptionsWatcher() {
    yield takeEvery(FETCH_DESCRIPTIONS, fetchDescriptionsWorker)
}
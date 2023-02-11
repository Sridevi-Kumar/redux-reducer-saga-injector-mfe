import {takeEvery, takeLatest} from 'redux-saga/effects'
import { PRODUCT_LIST } from '../Actions/constants'


function* fetchApi(){
    let data = yield fetch('https://jsonplaceholder.typicode.com/todos')
    data = yield data.json()
    console.warn("Saga is called", data)
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST, fetchApi)
}

export default productSaga
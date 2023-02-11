import {put, takeEvery, takeLatest, StrictEffect, all, fork} from 'redux-saga/effects'
import {getReactError, getReactSuccess, GET_REACT} from './action'

function* fetchApi() {
    console.warn("Saga is called")
    try{
        let data = yield fetch('https://jsonplaceholder.typicode.com/todos')
        data = yield data.json()
        console.log("Data" , data)
        yield put(
            getReactSuccess(data)
        )
        } catch(e){
            yield put(
                getReactError(e)
            )
        }
    
}



function* techSaga(){
    console.log("Saga")
    yield takeEvery(GET_REACT , fetchApi)
}

export default techSaga

export function* rootSaga(){
    yield all([fork(techSaga)]);
}
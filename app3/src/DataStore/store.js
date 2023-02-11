import {applyMiddleware, createStore} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './Reducers';
import createSagaMiddleware from 'redux-saga';
import productSaga from './Saga/productSaga';



// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
});
sagaMiddleware.run(productSaga)

export default store    
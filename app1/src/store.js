import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
 import {configureStore} from '@reduxjs/toolkit'
 import techSaga, {rootSaga} from './saga';
 import { techReducer } from './reducer';

const initialState = {
  appName: 'host',
};

const hostReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};



const staticReducers = {
  host: hostReducer,
  tech: techReducer
};

function createSagaInjector (runSaga, staticSaga) {
  const injectedSagas = {}

  const injectSaga = (key, saga) => {
    if (injectedSagas[key]) return injectedSagas[key]

    const task = runSaga(saga)
    injectedSagas[key] = task
    
  }
  injectSaga('root', staticSaga);

  return injectSaga;
}


/**
 * Cf. redux docs:
 * https://redux.js.org/recipes/code-splitting/#defining-an-injectreducer-function
 */
export default function setUpStore(initialState) {
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers();
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = createStore(createReducer(), initialState, applyMiddleware(sagaMiddleware));


//   const store = configureStore({
//     reducer: createReducer(),
//     middleware: () => [sagaMiddleware]
// });

//sagaMiddleware.run(rootSaga)

// asyncSaga = {}


 
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    console.log(key);
    console.log("Reducer" , store.asyncReducers[key]);
    store.replaceReducer(createReducer(store.asyncReducers));
  };  

  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga)  

  return store;
}






function createReducer(asyncReducers) {
  
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

export const store = setUpStore();
  
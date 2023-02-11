import './App.css';
import Header from './components/Header';
import React, { Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch} from 'react-redux';
import Main from './components/Main';
import rootReducer from './DataStore/Reducers/index' 
import productSaga from './DataStore/Saga/productSaga';

const productAppScope = 'productApp';
const Product = () => {
  // const dispatch = useDispatch();
  // const state = useSelector(state => state[productAppScope]);
  // const [productAppInput, setProductAppInput] = useState('');
  return (
    <div className="App">
      This is Product MFE
      <Header/>
      <Main/>
    </div>
  );
}

const ProductWrapper = props => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(productAppScope, rootReducer);
    store.injectSaga(productAppScope, productSaga)
    
  }, []);  

  return (
    <Provider store={store || {}}>
      <Product />
    </Provider>
  );
};

 export default ProductWrapper;



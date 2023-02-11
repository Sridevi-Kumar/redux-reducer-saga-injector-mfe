import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Startup } from './Startup'

import { store } from './store';

const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  console.log("Container" + container)
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  return container.get(module).then(factory => {
    const Module = factory();
    return Module;
  });
};

const RemoteApp = React.lazy(() => dynamicFederation('app2', './RemoteApp'));
const ProductApp = React.lazy(() => dynamicFederation('app3', './ProductApp'));


const App = () => {
  

  return (
    <Provider store={store}>
      <div>
        Welcome to Host App

        <div>
          <Suspense fallback="Loading...">
            
            <RemoteApp store={store} />
            <Startup />
            <div>
              <ProductApp store={store} />
            </div>
          </Suspense>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthLoader from './common/AuthLoader/AuthLoader';
import App from './App';
import { store, persistor } from './redux/store';
import './index.css';
import './fonts.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<AuthLoader />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

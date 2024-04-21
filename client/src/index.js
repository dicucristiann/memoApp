import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App';
import { reducers } from './reducers';

import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    {/* Wrap the entire app with GoogleOAuthProvider */}
    <GoogleOAuthProvider clientId="966358893713-ebmgtvneehmsb863c4mo6h3d2kdd8c3f.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root')
);

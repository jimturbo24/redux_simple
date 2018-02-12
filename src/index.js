import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';


// store.dispatch({ type: 'INC', payload: 'Walk the dog'})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

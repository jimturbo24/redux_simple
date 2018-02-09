import { applyMiddleware, combineReducers, createStore } from "redux";
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

// const todoReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'CHANGE_ID': {
//       state = {...state, id: action.payload};
//       break;
//     }
//     case 'CHANGE_TITLE': {
//       state = {...state, title: action.payload};
//       break;
//     }
//     case 'CHANGE_NAME': {
//       state = {...state, test: action.payload};
//       break;
//     }
//   }
//   return state;
// };
// const userReducer = (state={}, action) => {
//   switch(action.type) {
//     case 'CHANGE_NAME': {
//       state = {...state, name: action.payload};
//       break;
//     }
//     case 'CHANGE_AGE': {
//       state = {...state, age: action.payload};
//       break;
//     }
//   }
//   return state;
// };
// const reducers = combineReducers({
//   todo: todoReducer,
//   user: userReducer
// })


const initialState = {
  fetching: false,
  fetched: false,
  todos: [],
  error: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_USERS': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_USERS_REJECTED': {
      return {...state, error: action.payload}
      break;
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        todos: action.payload
      }
      break;
    }
  }
  return state
}


const middleware = applyMiddleware(createLogger(), thunk, promise());
const store = createStore(reducer, middleware);

// store.subscribe(() => {
//   console.log(store.getState())
// })

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get("https://jsonplaceholder.typicode.com/todos")
})

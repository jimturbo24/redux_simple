import axios from 'axios';

// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: axios.get("https://jsonplaceholder.typicode.com/todos")
// })

export function getTodos() {
  return function(dispatch){
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        dispatch({type: 'FETCH_USERS_FULFILLED', payload: response.data});
      })
  }
}

export function getTodo() {
  return {type: 'FETCH_USERS', payload: 'Pay bills'}
}

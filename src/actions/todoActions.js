import axios from 'axios';

// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: axios.get("https://jsonplaceholder.typicode.com/todos")
// })

export function getTodo() {
  return {type: 'FETCH_USERS', payload: 'Pay bills'}
}

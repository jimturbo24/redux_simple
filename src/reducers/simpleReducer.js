export default function reducer(state={
  fetching: false,
  fetched: false,
  todos: [],
  error: null
  }, action) {
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

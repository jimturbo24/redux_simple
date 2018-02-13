export default function reducer(state={
  fetching: false,
  fetched: false,
  todos: [],
  error: null
  }, action) {
  switch (action.type) {
    case 'FETCH_USERS': {
      return {...state, fetching: true}
    }
    case 'FETCH_USERS_REJECTED': {
      return {...state, error: action.payload}
    }
    case 'FETCH_USERS_FULFILLED': {
      return {
        ...state,
        fetching: false,
        fetched: true,
        todos: action.payload}
    }
    default:
      return state;
  }
}

// Testing data
// const initialState = {
//     todo: "Pick up kids"
// }
//
// export default function reducer(state = initialState, action) {
//   return {...state, todo: action.payload};
// }

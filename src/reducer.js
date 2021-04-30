function reducer(state = { count: 10 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - action.step,
      }
    default:
      return state
  }
}

export default reducer

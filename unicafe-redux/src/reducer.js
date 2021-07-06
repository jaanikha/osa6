const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      return {good: 1 + state.good, ok: 0 + state.ok, bad: 0 + state.bad}
    case 'OK':
      return {good: 0 + state.good, ok: 1 + state.ok, bad: 0 + state.bad}
    case 'BAD':
      return {good: 0 + state.good, ok: 0 + state.ok, bad: 1 + state.bad}
    case 'ZERO':
      return {good: 0, ok: 0, bad: 0}
    default: return state
  }
  
}

export default counterReducer
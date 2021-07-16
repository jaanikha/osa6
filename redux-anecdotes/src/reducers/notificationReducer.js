const initialNotification = ''
var addAnecTimeout
var voteTimeout

export const voteNotification = (message, timeout) => {
  return dispatch => {
    clearTimeout(voteTimeout)
    voteTimeout = setTimeout(function(){ dispatch(empty()) }, timeout*1000)
    dispatch({
    type: 'VOTE_NOTIFICATION',
    data: message
    })
  }
}

export const addAnecdoteNotification = (message, timeout) => {
  
  return dispatch => {
    clearTimeout(addAnecTimeout)
    addAnecTimeout = setTimeout(function(){ dispatch(empty()) }, timeout*1000)
    dispatch({
    type: 'ADD_ANECDOTE_NOTIFICATION',
    data: message
    })
  }
}

export const empty = () => {
    return {
      type: 'EMPTY'
    }
  }

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'VOTE_NOTIFICATION': return(action.data)
        case 'ADD_ANECDOTE_NOTIFICATION': return(action.data)
        case 'EMPTY': return('')
        default: return(state)
    }
}

export default notificationReducer

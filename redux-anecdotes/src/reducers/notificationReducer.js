const initialNotification = ''


export const voteNotification = (anecdote) => {
  return {
    type: 'VOTE_NOTIFICATION',
    data: anecdote
  }
}

export const addAnecdoteNotification = (anecdote) => {
  return {
    type: 'ADD_ANECDOTE_NOTIFICATION',
    data: anecdote
  }
}

export const empty = () => {
    return {
      type: 'EMPTY'
    }
  }

const notificationReducer = (state = initialNotification, action) => {
    switch (action.type) {
        case 'VOTE_NOTIFICATION': return(`succesfully voted for '${action.data}'`)
        case 'ADD_ANECDOTE_NOTIFICATION': return(`succesfully added '${action.data}'`)
        case 'EMPTY': return('')
        default: return(state)
    }
}

export default notificationReducer

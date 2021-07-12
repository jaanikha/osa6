const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content: content,
      votes: 0
    }
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const anecdoteToVote = state.find(anecdote => anecdote.id === action.data.id)
      const votedAnecdote = {
        content: anecdoteToVote.content,
        id: action.data.id,
        votes: anecdoteToVote.votes + 1
      }
      const newState = state.filter(anecdote => anecdote.id !== action.data.id).concat(votedAnecdote)
      console.log('voted')
      return newState

    case 'NEW_ANECDOTE':
      return [...state, action.data]

    case 'INIT_ANECDOTES':
      return action.data

    default: return state
  }
}

export default anecdoteReducer
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, empty } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const filter = useSelector(state => state.filter).toLowerCase()
  const anecdotes = useSelector(state => state.anecdotes)
  const dispatch = useDispatch()

  const applyFilter = (anecdotes) => {
    return ( anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter)) )
  }

  const filteredAnecdotes = applyFilter(anecdotes)

  const vote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(voteNotification(anecdote.content))
    setTimeout(function(){ dispatch(empty()) }, 5000)
  }

  return(
  <div>
      {filteredAnecdotes
          .sort((a, b) => {
            if (a.votes > b.votes) {
              return -1
            }
            if (a.votes < b.votes) {
              return 1
            }
            return 0
          }).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
  </div>
  )
}

export default AnecdoteList
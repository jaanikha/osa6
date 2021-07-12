import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { addAnecdoteNotification } from '../reducers/notificationReducer'
import { empty } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = () => {

const dispatch = useDispatch()

const addAnecdote = (event) => {
  event.preventDefault()
  const content = event.target.anecdote.value
  event.target.anecdote.value = ''
  dispatch(createAnecdote(content))

  anecdoteService.createNew(content)

  dispatch(addAnecdoteNotification(content))
  setTimeout(function(){ dispatch(empty()) }, 5000)

}

  return(
  <div>
    <h2>create new</h2>
    <form onSubmit={addAnecdote}>
      <div><input name='anecdote'/></div>
      <button type='submit'>create</button>
    </form>
  </div>
  )
}

export default AnecdoteForm
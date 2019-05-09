import React, { useContext } from 'react'

import { StateContext } from '../contexts'

function Form () {
  const [ state, dispatch ] = useContext(StateContext)

  const handleSubmit = ev => {
    ev.preventDefault()

    const form = new FormData(document.getElementById('what-to-do'))
    const name = form.get('task')

    // La alerta es solo por fines prácticos
    if (name.length < 3) return alert('The task must have at least 3 characters')

    dispatch({
      type: 'add',
      payload: {
        task: {
          id: state.tasks.length,
          name: form.get('task')
        }
      }
    })
  }

  return (
    <form id='what-to-do' onSubmit={handleSubmit}>
      <input type='text' name='task' placeholder='What to do?' min='3' />
      <input type='submit' value='Record' />
    </form>
  )
}

export default Form

import React, { useContext } from 'react'

import { StateContext } from '../contexts'

function List () {
  const [ state, dispatch ] = useContext(StateContext)

  const handleClick = task => {
    dispatch({
      type: 'remove',
      payload: {
        task
      }
    })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
        </tr>
      </thead>
      <tbody>
        {
          state.tasks.length > 0 &&
          state.tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.name}</td>
              <td onClick={() => handleClick(task)} style={{cursor: 'pointer', color: 'red'}}>✗</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default List

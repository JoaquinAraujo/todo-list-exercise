import React, { useReducer } from 'react'

import reducer from './reducer'
import initialState from './initialState'

import { StateContext } from './contexts'

import List from './components/List'
import Form from './components/Form'

function App () {
  const contextValue = useReducer(reducer, initialState)

  return (
    <StateContext.Provider value={contextValue}>
      <List />
      <Form />
    </StateContext.Provider>
  )
}

export default App

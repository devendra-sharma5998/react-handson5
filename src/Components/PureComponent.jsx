import React, { useState } from 'react'

export const PureComponent = () => {

const [state,setState]=useState(0)

function increment(){
  setState(state+1)
}


  return (
    <div>
      <h1>Pure component</h1>
        <div>
          <h1>{state}</h1>
          <button className='btn' onClick={increment}>Increment</button>
        </div>
       <p>To skip re-rendering a class component for same props and state, extend PureComponent instead of Component:</p>
    </div>
  )
}

import React from 'react'
import { useState } from 'react'

export default function Hover() {

    const [state,setState]=useState(0);

   function change(){
        setState(state+1)
    }


  return (
    <div>
      <h1>HOC Component</h1>

        <h1>{state}</h1>
        <button className='btn' onMouseOver={change}>Hover Me</button>
        <p>Higher order components help us to reuse the component logic.</p>
        <p>There are already some other react libraries using hoc pattern like connect in redux and withRouter in a react-router library.</p>
    </div>
  )
}

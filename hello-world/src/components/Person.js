import React from 'react'

function Person({person}) {
  return (
    <div>
        <h2>I am {person.name} and I am {person.age} years Old.</h2>
    </div>
  )
}

export default Person
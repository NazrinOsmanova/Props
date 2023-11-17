import React from 'react'

const Name = (props) => {
  return (
    <div className='name'>
      <p>Name: <span>{props.name}</span></p>
    </div>
  )
}

export default Name
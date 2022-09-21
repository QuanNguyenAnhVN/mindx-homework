import React from 'react'

export default function TodoList({item}) {
  return (
    <div>
      <p className='list-container'></p>
      <buttton className='btn btn-start'>Start</buttton>
      <buttton className='btn btn-delete'>Delete</buttton>
    </div>
  )
}

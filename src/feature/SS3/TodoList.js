import React from 'react'
import './SS3.css'
export default function TodoList({ item,index }) {

  const removeList = (item) => {
    const removeDupList = item.slice();
    removeDupList.splice(item.content,1);
    this.setTodos({
      content: removeDupList
    })
  }

  return (
    <div className='list-container'>
      <p>{item.content}</p>
      <button className='btn btn-start'>Start</button>
      <button className='btn btn-delete' onClick={removeList.bind(this,index)}>Delete</button>
    </div>
  )
}

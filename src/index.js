import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import MainButton from './feature/Main-Button/MainButton'
function Hello() {
  return (
      <MainButton />
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'));

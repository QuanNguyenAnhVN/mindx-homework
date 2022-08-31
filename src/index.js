import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import SS2 from './feature/SS2/SS2'
import MainButton from './feature/Main-Button/MainButton'
function Hello() {
  return (
    <div>
      <MainButton />
      <SS2 />
    </div>
  )
}

ReactDOM.render(<Hello />, document.getElementById('root'));

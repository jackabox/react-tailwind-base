import React from 'react'
import ReactDOM from 'react-dom'

import './css/tailwind.css'

function App() {
  return (
    <div className="text-center font-sans">
      <h1 className="text-red">Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)

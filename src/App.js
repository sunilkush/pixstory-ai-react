import React, { useState } from 'react'
import './App.css'
import Switch from 'react-ios-switch'

import Advanced from './examples/Advanced'
import Advanced2 from './examples/Advanced2'
import Simple from './examples/Simple'

function App () {
  const [showAdvanced, setShowAdvanced] = useState(true)

  return (
    <div className='app'>
      {showAdvanced ? <Advanced2 /> : <Simple />}
      <div className='row'>
        {/* <p style={{ color: '#fff' }}>Show advanced example</p> <Switch checked={showAdvanced} onChange={setShowAdvanced} /> */}
      </div>
    </div>
  )
}

export default App

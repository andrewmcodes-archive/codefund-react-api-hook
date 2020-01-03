import React from 'react'

import { useMyHook } from '@codefund/react-codefund-hook'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App

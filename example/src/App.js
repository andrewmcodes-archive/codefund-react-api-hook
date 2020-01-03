import React from 'react'
import { useCodeFundAd } from '@codefund/react-api-hook'

const App = () => {
  const { ad, loading, error } = useCodeFundAd('0')
  return <Ad adMarkup={ad} loadingState={loading} errorMessage={error} />
}

const Ad = ({ adMarkup, loadingState, errorMessage }) => <div dangerouslySetInnerHTML={adMarkup} />

export default App

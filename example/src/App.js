import React from 'react'
import { useCodeFundAd } from '@codefund/react-api-hook'

// TODO
const { ad, loading, error } = useCodeFundAd('669')
console.log(ad)
const App = () => {
  // return <Ad adMarkup={ad} loadingState={loading} errorMessage={error} />
}

// const Ad = ({ adMarkup, loadingState, errorMessage }) => <div dangerouslySetInnerHTML={adMarkup} />

export default App

import React from "react"
import { useCodeFundAd } from "@codefund/react-api-hook"

// TODO
const App = () => {
  const { ad, loading, error } = useCodeFundAd("669")
  console.log(ad)
  return <Ad adMarkup={ad} loadingState={loading} errorMessage={error} />
}

const Ad = ({ adMarkup, loadingState, errorMessage }) => (
  <div dangerouslySetInnerHTML={{ __html: adMarkup }} />
)

export default App

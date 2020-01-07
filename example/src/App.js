import React from "react"
import Skeleton from "react-skeleton-loader"
import { useCodeFundAd } from "@codefund/react-api-hook"

class App extends React.Component {
  render () {
    return (
      <>
        <p class="blokk">
          BLOKK is a font for quick mock-ups and wireframing for clients who do not understand latin.
        </p>
        <div class="center">
          <CodeFund />
        </div>
      </>
    )
  }
}


function CodeFund () {
  const { ad, loading, error } = useCodeFundAd("669")
  if (loading) {
    return <AdLoading />
  }

  if (!error) {
    return <AdMarkup ad={ad} />
  }
}

function AdMarkup (props) {
  return <div dangerouslySetInnerHTML={{ __html: props.ad }} />
}

function AdLoading () {
  return <Skeleton count={5} width={"330px"} borderRadius={"0px"} />
}

export default App

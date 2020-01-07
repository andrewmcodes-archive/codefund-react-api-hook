import React from "react"
import Skeleton from "react-skeleton-loader"
import { LoremIpsum } from "react-lorem-ipsum"
import { useCodeFundAd } from "@codefund/react-api-hook"

class App extends React.Component {
  render() {
    return (
      <>
        <h1>@codefund/react-api-hook Demo</h1>
        <Text paragraphs={2} />
        <div className="center">
          <CodeFund />
        </div>
        <Text paragraphs={6} />
      </>
    )
  }
}

function CodeFund() {
  const { ad, loading, error } = useCodeFundAd(
    process.env.REACT_APP_CODEFUND_PROPERTY_ID
  )
  if (loading) {
    return <AdLoading />
  }

  if (!error) {
    return <AdMarkup ad={ad} />
  }
}

function AdMarkup(props) {
  return <div dangerouslySetInnerHTML={{ __html: props.ad }} />
}

function AdLoading() {
  return <Skeleton count={5} width={"330px"} borderRadius={"0px"} />
}

function Text(props) {
  return (
    <div className="text-wrapper">
      <LoremIpsum p={props.paragraphs} avgSentencesPerParagraph={16} />
    </div>
  )
}

export default App

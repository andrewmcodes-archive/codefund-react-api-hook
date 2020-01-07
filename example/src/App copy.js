import React from "react"
import Loader from 'react-loader-spinner'
import { useCodeFundAd } from "@codefund/react-api-hook"

// const App = () => {
//   const { ad, loading, error } = useCodeFundAd("669")
//   console.log(loading)
//   return(
//     <Ad adMarkup={ad} loadingState={loading} errorMessage={error} />
//   )
// }

// const Ad = ({ adMarkup, loadingState, errorMessage }) => (
//   <div dangerouslySetInnerHTML={{ __html: adMarkup }} />
// )

// export default App

class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick () {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick () {
    this.setState({ isLoggedIn: false })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    let button


    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <CodeFund />
      </div>
    )
  }
}


function CodeFund () {
  const { ad, loading, error } = useCodeFundAd("669")
  if (loading) {
    return <AdLoading />
  }
  return <AdMarkup ad={ad} />
}

function AdMarkup (props) {
  return <div dangerouslySetInnerHTML={{ __html: props.ad }} />
}

function AdLoading (props) {
  return <h1>Loading!</h1>
}

function UserGreeting (props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting (props) {
  return <h1>Please sign up.</h1>
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

function LoginButton (props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton (props) {
  return <button onClick={props.onClick}>Logout</button>
}


export default App

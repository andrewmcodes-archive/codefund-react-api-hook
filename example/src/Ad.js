import React from 'react'
import { useCodeFundAd } from '@codefund/react-api-hook'

class Ad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ad: '',
      loading: false,
      error: ''
    }
  }

  componentDidMount () {
    const { ad, loading, error } = useCodeFundAd('669')
    this.setState({
      ad: ad,
      loading: loading,
      error: error
    })
  }

  adMarkup () {
    return { __html: this.state.ad }
  }

  render () {
    return <div dangerouslySetInnerHTML={this.adMarkup()} />
  }
}

export default Ad

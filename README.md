[CoC]: /CODE_OF_CONDUCT.md
[contributing]: /CONTRIBUTING.md
[license]: /LICENSE

# @codefund/react-api-hook
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

> CodeFund.io API hook for React.js

[![NPM](https://img.shields.io/npm/v/@codefund/react-api-hook.svg)](https://www.npmjs.com/package/@codefund/react-api-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
# NPM
npm install --save @codefund/react-api-hook

# Yarn
yarn add @codefund/react-api-hook
```

## Usage

All you need to do is pass your CodeFund Property ID to the hook and save the ad markup to a variable:

```js
const { ad } = useCodeFundAd(process.env.REACT_APP_CODEFUND_PROPERTY_ID)
```

The hook will return three values if you'd like to use them, but `ad` is the only necessary value.

Note that we only return an ad when your `NODE_ENV` is production.

### `ad: string`

The markup for the ad that you can then render on a page.

<details>
  <summary>Example Return Value</summary>

  ```html
  <link href="https://app.codefund.io/packs/css/code_fund_ad-a247634a.css" rel="stylesheet" media="all"><div id="cf" data-template="default" data-theme="light"> <span> <span class="cf-wrapper"> <a href="https://app.codefund.io/impressions/654962e7-a2b0-40a5-9419-96d372c879cc/click?campaign_id=635&amp;creative_id=580&amp;property_id=669&amp;template=default&amp;theme=light" class="cf-sponsored-by" target="_blank" rel="sponsored noopener"> <span class="cf-img-wrapper"> <img src="https://cdn2.codefund.app/1dipzax8qeezdz49lasl7abpbkao" alt="Sell Out Ethically" border="0" height="100" width="130" class="cf-img"> </span> <span class="cf-text"> <strong>Earn money without selling out.</strong> <span>Consider placing ethical ads on your site.</span> </span> </a> <a href="https://app.codefund.io/invite/4nr1oPkB4W8" class="cf-powered-by" target="_blank" rel="sponsored noopener"> <em>ethical</em> ad by CodeFund <img src="https://app.codefund.io/display/654962e7-a2b0-40a5-9419-96d372c879cc.gif" data-src="https://app.codefund.io/display/654962e7-a2b0-40a5-9419-96d372c879cc.gif" data-behavior="trackImpression" class="cf-impression" alt=""> </a> </span> </span> </div>
  ```

</details>

### `loading: boolean`

A boolean value indicating whether the ad is in a loading state or not. You can use this to create a nice loading or skeleton effect, which you can see in the example app.

### `error: string`

A string value that holds the response message from the fetch request in the event the request returns a non-200 response code.

## Basic Example

```js
import React from "react"
import { useCodeFundAd } from "@codefund/react-api-hook"

const App = () => {
  const { ad } = useCodeFundAd(process.env.REACT_APP_CODEFUND_PROPERTY_ID)
  return <Ad ad={ad} />
}

const Ad = ({ ad }) => (
  <div dangerouslySetInnerHTML={{ __html: ad }} />
)

export default App
```

## Advanced Example

```js
import React from "react"
import Skeleton from "react-skeleton-loader"
import { useCodeFundAd } from "@codefund/react-api-hook"

class App extends React.Component {
  render () {
    return <CodeFund />
  }
}

function CodeFund () {
  const { ad, loading, error } = useCodeFundAd(process.env.REACT_APP_CODEFUND_PROPERTY_ID)
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
```

## Contributing

We encourage you to contribute! Please check out the [Contributing Guide][contributing] for guidelines about how to proceed.

### Code of Conduct

Everyone interacting with the project’s codebase and issue tracker are expected to follow the [Code of Conduct][CoC].

### Coding Standards

This project uses Prettier for JavaScript code to minimize bike shedding related to source formatting.

Please run `yarn format` prior to submitting pull requests.

## License

Released under the [MIT License][license].

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.andrewmason.me/"><img src="https://avatars1.githubusercontent.com/u/18423853?v=4" width="100px;" alt=""/><br /><sub><b>Andrew Mason</b></sub></a><br /><a href="https://github.com/andrewmcodes/codefund-react-api-hook/commits?author=andrewmcodes" title="Code">💻</a></td>
    <td align="center"><a href="http://www.julianrubisch.at"><img src="https://avatars0.githubusercontent.com/u/4352208?v=4" width="100px;" alt=""/><br /><sub><b>Julian Rubisch</b></sub></a><br /><a href="https://github.com/andrewmcodes/codefund-react-api-hook/commits?author=julianrubisch" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

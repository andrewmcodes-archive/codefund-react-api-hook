# @codefund/react-codefund-hook

> CodeFund.io API hook for React.js

[![NPM](https://img.shields.io/npm/v/@codefund/react-codefund-hook.svg)](https://www.npmjs.com/package/@codefund/react-codefund-hook) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @codefund/react-codefund-hook
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from '@codefund/react-codefund-hook'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [andrewmcodes](https://github.com/andrewmcodes)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).

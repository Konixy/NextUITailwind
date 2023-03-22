# NextUITailwind

## Usage

- ### NextJs:

Just add the `WithNextUI` provider like so in `pages/_document.js` or `pages/_document.tsx`
```jsx
import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { WithNextUI } from "nextuitailwind";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: React.Children.toArray([initialProps.styles]),
    };
  }

  render() {
    return (
      <Html lang="en">
        <body>
          <WithNextUI>
            <Main />
            <NextScript />
          </WithNextUI>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

- ### React:

This is not needed in non-nextjs projects.
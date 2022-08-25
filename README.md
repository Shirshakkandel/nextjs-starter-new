# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

# `1)Install chakra ui`

# `2)Adding colors,fonts and global variable for website`


#  `1)Nextjs with typescript and tailwindcss`
npx create-next-app@latest --typescript --example with-tailwindcss
yarn add @emotion/react @emotion/css @emotion/styled
yarn add hamburger-react

# `2)Make component folder and add home folder with index.js to export all component.`

# `3)check and add  fonts and colors from figma`
 using @import url in globals.css.
add theme:{ extend:{ fontFamily:{primary:[' ']}}} 


#`4)add class inside global.css`
@layer components{
.section-wrapper,mt-section, .heading, .paragraph and mt-element.
}

@layer base {
  html {
    background: #fefefe;
    @apply scroll-smooth font-primary;
  }
}

#`5)Adding styled components`
//utils/styledComponents.ts
import styled from '@emotion/styled';

const Flex = styled.div``;
const Absolute = styled.div``;
const FlexSection = styled.div``;
const FlexItem = styled.div``;
const Relative = styled.div``;
const Grid = styled.div``;

export { Grid, Flex, Absolute, FlexSection, FlexItem, Relative };

#`6)Create CurrentSection Context`
#`7)useWindowSize hook to calculate width and height.`



# styled-rhythm

[![Build Status](https://travis-ci.org/oreqizer/styled-rhythm.svg?branch=master)](https://travis-ci.org/oreqizer/styled-rhythm)
[![codecov](https://codecov.io/gh/oreqizer/styled-rhythm/branch/master/graph/badge.svg)](https://codecov.io/gh/oreqizer/styled-rhythm)
[![npm](https://img.shields.io/npm/v/styled-rhythm.svg)](https://www.npmjs.com/package/styled-rhythm)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

**Box** and **Line** components for maintaining vertical rhythm with ease!

## Peer dependencies

* `react` >= 16.0.0
* `prop-types` >= 15.6.0
* `styled-components` >= 2.2.0

## API

The entire package is just two components. You _must_ provide them with a theme with these two fields:

* `baseFont: number` - your base font size
* `baseLineScale: number` - your line height relative to the `baseFont`

To provide the theme, do one of the following:

* provide the `theme` prop directly
* use `styled-components`' `ThemeProvider`

#### Example

```js
import { Box } from 'styled-rhythm';
import { ThemeProvider } from 'styled-components';

const theme = {
  baseFont: 16,
  baseLineScale: 1.5,
};

// Prop:
const BoxProp = () => (
  <Box
    as="button"
    theme={theme}
    height={2.5}
    marginTop={0}
    marginBottom={1}
  />
);

// Theme provider:
const BoxProvider = () => (
  <ThemeProvider theme={theme}>
    <Box
      as="button"
      height={2.5}
      marginTop={0}
      marginBottom={1}
    />
  </ThemeProvider>
);
```

### Box

Used for box elements such as `div`, `button`.

#### Props

* `as: React.ElementType<*> | string` - the component to render (default `div`)
* `height: number` - element height relative to the base _line height_
* `marginTop: number` - top margin relative to the base _line height_
* `marginBottom: number` - bottom margin relative to the _base line height_

#### Example

```js
import { Box } from 'styled-rhythm';

const Button = props => (
  <Box
    as="button"
    height={2.5}
    marginTop={0}
    marginBottom={1}
    {...props}
  />
);
```

### Line

Used for text elements such as `span`, `a`.

#### Props

* `as: React.ElementType<*> | string` - the component to render (default `span`)
* `fontSize: number` - font size relative to the base _font size_
* `marginTop: number` - top margin relative to the base _line height_
* `marginBottom: number` - bottom margin relative to the base _line height_
* `border?: number` - any extra borders the component will have _in pixels_

#### Example

```js
import { Line } from 'styled-rhythm';

const Link = props => (
  <Line
    as="a"
    fontSize={1.2}
    marginTop={0.5}
    marginBottom={0.5}
    {...props}
  />
);
```

## License

MIT

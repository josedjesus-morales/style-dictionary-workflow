# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import './styles.css';
import '../src/color.tokens.css';
```

## Core

### Primary colors

Primary colors of our brand.

```js story
export const primary = () => html`
  <dockit-css-showcases
    css-props-prefix="--tudn-color-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Secondary colors

Secondary colors of our brand.

```js story
export const secondary = () => html`
  <dockit-css-showcases
    css-props-prefix="--tudn-color-complementary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Dark colors

Dark colors we use throughout our applications.

```js story
export const dark = () => html`
  <dockit-css-showcases
    css-props-prefix="--tudn-color-black"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Light colors

Light colors we use throughout our applications.

```js story
export const light = () => html`
  <dockit-css-showcases
    css-props-prefix="--tudn-color-white"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

## Semantic

Semantic colors we use throughout our applications.

```js story
export const semantic = () => html`
  <dockit-css-showcases
    css-props-prefix="--tudn-color"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

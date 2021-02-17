# which-term

Return which terminal is being used to run the current command.

## Installation

```
npm install which-term
```

## Usage

![](https://user-images.githubusercontent.com/709451/108176039-58234f80-70b6-11eb-876d-b67551e4e922.png)

index.ejs

```js
import { terminal } from "which-term";

console.log(terminal);
// "iterm"
```

index.mjs

```js
const { terminal } = require("which-term");

console.log(terminal);
// "iterm"
```

```ts
export declare enum Terminal {
  Unknown = "unknown",
  iTerm = "iterm",
  Apple = "apple",
  Hyper = "hyper",
  alacritty = "alacritty",
}
export declare const terminal: Terminal;
export default terminal;
```

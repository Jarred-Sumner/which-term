# which-term

Return which terminal is being used to run the current command.

## Installation

```
npm install -g which-term
```

## Usage

index.ejs

```
import {terminal} from 'which-term';

console.log(terminal);
// "iterm"
```

index.mjs

```
const {terminal} = require('which-term');

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

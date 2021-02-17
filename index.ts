export enum Terminal {
  Unknown = "unknown",
  iTerm = "iterm",
  Apple = "apple",
  Hyper = "hyper",
  alacritty = "alacritty",
}

let _terminal = Terminal.Unknown;

switch (process.env["TERM_PROGRAM"] || "") {
  case "iTerm.app": {
    _terminal = Terminal.iTerm;
    break;
  }

  case "Apple_Terminal": {
    _terminal = Terminal.Apple;
    break;
  }

  case "Hyper": {
    _terminal = Terminal.Hyper;
    break;
  }

  default: {
    switch (process.env["TERM"]) {
      case "alacritty": {
        _terminal = Terminal.alacritty;
        break;
      }

      default: {
        _terminal = Terminal.Unknown;
        break;
      }
    }
  }
}

export const terminal = _terminal;
export default terminal;

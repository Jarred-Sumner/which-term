var Terminal;
(function(Terminal2) {
  Terminal2["Unknown"] = "unknown";
  Terminal2["iTerm"] = "iterm";
  Terminal2["Apple"] = "apple";
  Terminal2["Hyper"] = "hyper";
  Terminal2["alacritty"] = "alacritty";
})(Terminal || (Terminal = {}));
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
const terminal = _terminal;
var which_term_default = terminal;
export {
  Terminal,
  which_term_default as default,
  terminal
};

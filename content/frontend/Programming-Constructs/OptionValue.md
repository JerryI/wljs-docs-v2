---
title: OptionValue
---

`OptionValue[name]` extracts option values inside a function defined with `OptionsPattern[]`.

## Examples

Define functions with options:

```wolfram
Options[myFunc] = {Color -> Red, Size -> 10}

myFunc[x_, OptionsPattern[]] := {
  OptionValue[Color],
  OptionValue[Size],
  x
}

myFunc[5]
(* {Red, 10, 5} *)

myFunc[5, Color -> Blue]
(* {Blue, 10, 5} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OptionValue.html) for more details.
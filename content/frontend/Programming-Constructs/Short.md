---
title: Short
---

`Short[expr]` prints as a short form of expr, less than about one line long.

`Short[expr, n]` prints as a form of expr about n lines long.

## Examples

Shorten a long expression:

```wolfram
Short[Range[100]]
(* {1, 2, <<96>>, 99, 100} *)
```

Specify length:

```wolfram
Short[Table[x^i, {i, 50}], 2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Short.html) for more details.
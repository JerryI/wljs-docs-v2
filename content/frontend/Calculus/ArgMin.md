---
title: ArgMin
---

`ArgMin[f, x]` gives a position xmin at which f is minimized.

`ArgMin[f, {x, y, ...}]` gives a position {xmin, ymin, ...} at which f is minimized.

`ArgMin[{f, cons}, {x, y, ...}]` gives a position at which f is minimized subject to the constraints cons.

## Examples

Find where a function is minimized:

```wolfram
ArgMin[x^2 + 2x + 1, x]
(* -1 *)
```

With constraints:

```wolfram
ArgMin[{x^2 + y^2, x + y == 1}, {x, y}]
(* {1/2, 1/2} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArgMin.html) for more details.
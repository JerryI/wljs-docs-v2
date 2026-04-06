---
title: NArgMin
---

`NArgMin[f, x]` gives a position xmin at which f is numerically globally minimized.

`NArgMin[f, {x, y, ...}]` gives a position {xmin, ymin, ...} at which f is minimized.

`NArgMin[{f, cons}, {x, y, ...}]` gives a position minimizing f subject to constraints cons.

## Examples

Find minimum location:

```wolfram
NArgMin[x^2 - 4 x + 5, x]
(* 2. *)
```

With constraints:

```wolfram
NArgMin[{x + y, x >= 0, y >= 0, x + y >= 1}, {x, y}]
(* {0., 1.} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NArgMin.html) for more details.
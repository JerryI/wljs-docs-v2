---
title: FindMinimum
---

`FindMinimum[f, {x, x0}]` searches for a local minimum in f, starting from the point x=x0.

## Examples

Find local minimum:

```wolfram
FindMinimum[x^2 - 4x + 5, {x, 0}]
(* {1., {x -> 2.}} *)
```

Multivariable:

```wolfram
FindMinimum[x^2 + y^2 + x*y, {{x, 1}, {y, 1}}]
(* {0., {x -> 0., y -> 0.}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindMinimum.html) for more details.
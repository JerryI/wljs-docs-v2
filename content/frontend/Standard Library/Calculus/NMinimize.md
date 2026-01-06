---
title: NMinimize
---

`NMinimize[f, x]` searches for a global minimum in f numerically with respect to x.

## Examples

Global minimum:

```wolfram
NMinimize[Sin[x] + Sin[2x], {x, 0, 10}]
(* {-1.76, {x -> 5.24}} *)
```

With constraints:

```wolfram
NMinimize[{x^2 + y^2, x + y >= 1}, {x, y}]
(* {0.5, {x -> 0.5, y -> 0.5}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NMinimize.html) for more details.*
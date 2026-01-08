---
title: NMaximize
---

`NMaximize[f, x]` searches for a global maximum in f numerically with respect to x.

## Examples

Global maximum:

```wolfram
NMaximize[Sin[x] + Sin[2x], {x, 0, 10}]
(* {1.76, {x -> 1.04}} *)
```

With constraints:

```wolfram
NMaximize[{x + y, x^2 + y^2 <= 1}, {x, y}]
(* {1.414, {x -> 0.707, y -> 0.707}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NMaximize.html) for more details.
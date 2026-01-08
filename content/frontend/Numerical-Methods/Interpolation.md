---
title: Interpolation
---

`Interpolation[data]` creates an interpolating function that passes through the given data points.

## Examples

Create and use interpolating functions:

```wolfram
data = {{0, 0}, {1, 1}, {2, 4}, {3, 9}}
f = Interpolation[data]

(* Evaluate at any point *)
f[1.5]
(* 2.25 *)

(* Plot the interpolation *)
Plot[f[x], {x, 0, 3}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Interpolation.html) for more details.*
---
title: Convolve
---

`Convolve[f, g, x, y]` gives the convolution of expressions f and g with respect to x.

## Examples

Convolve two functions:

```wolfram
Convolve[Exp[-x^2], Exp[-x^2], x, y]
(* Sqrt[Pi/2] E^(-y^2/2) *)
```

Box convolution:

```wolfram
Convolve[UnitBox[x], UnitBox[x], x, y]
(* UnitTriangle[y] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Convolve.html) for more details.*
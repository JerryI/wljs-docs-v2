---
title: Method
---

`Method` is an option for various algorithm-intensive functions that specifies what internal methods they should use.

## Examples

Specify integration method:

```wolfram
NIntegrate[Sin[x^2], {x, 0, 10}, Method -> "GaussKronrodRule"]
```

Specify solver method:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, Method -> "ExplicitRungeKutta"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Method.html) for more details.*
---
title: CompleteIntegral
---

`CompleteIntegral[pde, u, {x1, ..., xn}]` gives a complete integral u for the first-order partial differential equation pde, with independent variables {x1, ..., xn}.

## Examples

Find complete integral of a PDE:

```wolfram
CompleteIntegral[D[u[x, y], x] + D[u[x, y], y] == 1, u[x, y], {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CompleteIntegral.html) for more details.*
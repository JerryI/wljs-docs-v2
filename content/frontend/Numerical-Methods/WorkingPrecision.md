---
title: WorkingPrecision
---

`WorkingPrecision` is an option for various numerical operations that specifies how many digits of precision should be maintained in internal computations.

## Examples

```wolfram
NIntegrate[Sin[x], {x, 0, Pi}, WorkingPrecision -> 50]
```

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, 
  WorkingPrecision -> 30]
```

```wolfram
FindRoot[x^2 - 2, {x, 1}, WorkingPrecision -> 100]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WorkingPrecision.html) for more details.*
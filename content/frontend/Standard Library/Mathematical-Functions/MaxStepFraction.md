---
title: MaxStepFraction
---

`MaxStepFraction` is an option to functions like `NDSolve` that specifies the maximum fraction of the total range to cover in a single step.

## Examples

Limit step size to 1% of the range:
```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 10}, MaxStepFraction -> 1/100]
```

Use for smoother solutions:
```wolfram
NDSolve[eqns, y, {t, 0, 100}, MaxStepFraction -> 0.01]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxStepFraction.html) for more details.*
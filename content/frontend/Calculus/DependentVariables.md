---
title: DependentVariables
---

`DependentVariables` is an option for `NDSolve` and other functions that specifies the list of all objects that should be considered as dependent variables in equations that have been supplied.

## Examples

Specify dependent variables:

```wolfram
NDSolve[{y'[x] == y[x], y[0] == 1}, y, {x, 0, 1}, DependentVariables -> {y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DependentVariables.html) for more details.*
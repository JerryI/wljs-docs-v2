---
title: ParametricFunction
---

`ParametricFunction[pars,…]` represents a function that computes a solution when evaluated with numerical values for the parameters pars.

## Examples

Evaluate a parametric function with specific parameter values:

```wolfram
pfun = ParametricNDSolveValue[{y'[x] == a y[x], y[0] == 1}, y, {x, 0, 1}, {a}];
pfun[2][0.5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParametricFunction.html) for more details.
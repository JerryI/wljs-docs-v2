---
title: NormFunction
---

`NormFunction` is an option for functions such as `FindFit` and `NDSolve` which gives a function to be minimized in generating results.

## Examples

Use a custom norm for fitting:
```wolfram
FindFit[data, a*x + b, {a, b}, x, NormFunction -> (Norm[#, 1] &)]
```

Apply the 1-norm instead of default:
```wolfram
NDSolve[eqns, y, {t, 0, 10}, NormFunction -> (Norm[#, Infinity] &)]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NormFunction.html) for more details.*
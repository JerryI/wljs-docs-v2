---
title: BayesianMinimization
---

`BayesianMinimization[f,{conf1,conf2,…}]` gives an object representing the result of Bayesian minimization of the function f over the configurations confi.

`BayesianMinimization[f,reg]` minimizes over the region represented by the region specification reg.

`BayesianMinimization[f,sampler]` minimizes over configurations obtained by applying the function sampler.

`BayesianMinimization[f,{conf1,conf2,…}->nsampler]` applies the function nsampler to successively generate configurations starting from the confi.

## Examples

Minimize a function using Bayesian optimization:

```wolfram
BayesianMinimization[(#x - 2)^2 + (#y - 3)^2 &, {"x" -> {-5, 5}, "y" -> {-5, 5}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BayesianMinimization.html) for more details.
# BayesianMaximization

`BayesianMaximization[f, {conf1, conf2, ...}]` gives an object representing the result of Bayesian maximization over the function f over the configurations confi.

`BayesianMaximization[f, reg]` maximizes over the region represented by the region specification reg.

`BayesianMaximization[f, sampler]` maximizes over configurations obtained by applying the function sampler.

## Examples

Maximize a function using Bayesian optimization:

```wolfram
BayesianMaximization[-((#x - 2)^2 + (#y - 3)^2) &, {"x" -> {-5, 5}, "y" -> {-5, 5}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BayesianMaximization.html) for more details.*
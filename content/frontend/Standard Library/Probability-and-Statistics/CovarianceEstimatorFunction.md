---
title: CovarianceEstimatorFunction
---

`CovarianceEstimatorFunction` is an option for generalized linear model fitting functions that specifies the estimator for the parameter covariance matrix.

## Examples

Use custom covariance estimator:

```wolfram
GeneralizedLinearModelFit[data, x, x, CovarianceEstimatorFunction -> "Robust"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CovarianceEstimatorFunction.html) for more details.*
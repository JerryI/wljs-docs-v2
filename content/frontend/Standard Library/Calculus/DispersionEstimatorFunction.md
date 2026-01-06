# DispersionEstimatorFunction

`DispersionEstimatorFunction` is an option for generalized linear model fitting functions that specifies the estimator for the dispersion parameter.

## Examples

Use DispersionEstimatorFunction with GeneralizedLinearModelFit:

```wolfram
GeneralizedLinearModelFit[data, x, x, DispersionEstimatorFunction -> "Pearson"]
(* FittedModel[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DispersionEstimatorFunction.html) for more details.*
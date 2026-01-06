# ParameterEstimator

`ParameterEstimator` is an option to `EstimatedDistribution` and `FindDistributionParameters` that specifies what parameter estimator to use.

## Examples

Use maximum likelihood estimation:
```wolfram
EstimatedDistribution[data, NormalDistribution[m, s], ParameterEstimator -> "MaximumLikelihood"]
```

Use method of moments:
```wolfram
FindDistributionParameters[data, dist, ParameterEstimator -> "MethodOfMoments"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParameterEstimator.html) for more details.*
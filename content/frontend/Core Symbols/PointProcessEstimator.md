# PointProcessEstimator

`PointProcessEstimator` is an option to `EstimatedPointProcess` and `FindPointProcessParameters` that specifies what point process parameter estimator to use.

## Examples

```wolfram
EstimatedPointProcess[data, PoissonPointProcess[μ], 
  PointProcessEstimator -> "MaximumLikelihood"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointProcessEstimator.html) for more details.*
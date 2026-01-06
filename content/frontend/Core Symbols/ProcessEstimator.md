# ProcessEstimator

`ProcessEstimator` is an option to `EstimatedProcess` and `FindProcessParameters` that specifies what process parameter estimator to use.

## Examples

```wolfram
EstimatedProcess[data, WienerProcess[], ProcessEstimator -> "MaximumLikelihood"]
```

```wolfram
FindProcessParameters[data, ARProcess[1], ProcessEstimator -> "MethodOfMoments"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ProcessEstimator.html) for more details.*
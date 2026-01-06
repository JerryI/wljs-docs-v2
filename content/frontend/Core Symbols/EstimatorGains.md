# EstimatorGains

`EstimatorGains[ssm, {p1, p2, ..., pn}]` gives the estimator gain matrix for the `StateSpaceModel` ssm, such that the poles of the estimator are pi.

`EstimatorGains[{ssm, {out1, ...}}, ...]` specifies the measured outputs outi to use.

## Examples

Compute estimator gains:

```wolfram
EstimatorGains[ssm, {-1, -2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EstimatorGains.html) for more details.*
# DiscreteLQEstimatorGains

`DiscreteLQEstimatorGains[ssm, {w, v}, τ]` gives the optimal discrete-time estimator gain matrix with sampling period τ for the continuous-time `StateSpaceModel` ssm.

`DiscreteLQEstimatorGains[{ssm, sensors}, {w, v}, τ]` specifies sensors as the noisy measurements.

## Examples

Compute estimator gains:

```wolfram
sys = StateSpaceModel[{{-1}}, {{1}}, {{1}}, {{0}}];
DiscreteLQEstimatorGains[sys, {{{1}}, {{1}}}, 0.1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteLQEstimatorGains.html) for more details.*
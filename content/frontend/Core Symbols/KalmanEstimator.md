# KalmanEstimator

`KalmanEstimator[ssm, {w, v}]` constructs the Kalman estimator for the `StateSpaceModel` `ssm` with process and measurement noise covariance matrices `w` and `v`.

- `KalmanEstimator[ssm, {w, v, h}]` includes the cross-covariance matrix `h`.
- `KalmanEstimator[{ssm, sensors}, {…}]` specifies `sensors` as the noisy measurements of `ssm`.
- `KalmanEstimator[{ssm, sensors, dinputs}, {…}]` specifies `dinputs` as the deterministic inputs of `ssm`.

## Examples

```wolfram
KalmanEstimator[StateSpaceModel[{{0.5}}, {{1}}, {{1}}, {{0}}], {{{0.1}}, {{0.2}}}]
```

```wolfram
KalmanEstimator[ssm, {processNoise, measurementNoise}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KalmanEstimator.html) for more details.*
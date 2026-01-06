---
title: LQEstimatorGains
---

`LQEstimatorGains[ssm, {w, v}]` gives the optimal estimator gain matrix for the StateSpaceModel ssm, with process and measurement noise covariance matrices w and v.

- `LQEstimatorGains[ssm, {w, v, h}]` includes the cross-covariance matrix h.
- `LQEstimatorGains[{ssm, sensors}, {...}]` specifies sensors as the noisy measurements of ssm.
- `LQEstimatorGains[{ssm, sensors, dinputs}, {...}]` specifies dinputs as the deterministic inputs of ssm.

## Examples

Compute estimator gains:
```wolfram
LQEstimatorGains[stateSpaceModel, {Q, R}]
```

With sensors specification:
```wolfram
LQEstimatorGains[{model, {1}}, {w, v}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LQEstimatorGains.html) for more details.*
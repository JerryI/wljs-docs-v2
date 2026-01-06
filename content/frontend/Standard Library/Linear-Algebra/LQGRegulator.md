---
title: LQGRegulator
---

`LQGRegulator[sspec, cvs, wts]` gives the optimal output feedback controller for the stochastic system specification sspec with noise covariance matrices cvs that minimizes a cost function with weights wts.

- `LQGRegulator[..., "prop"]` gives the value of the property "prop".

## Examples

```wolfram
sys = StateSpaceModel[{{-1, 0}, {0, -2}}, {{1}, {0}}, {{1, 1}}, {{0}}];
LQGRegulator[sys, {1, 1}, {IdentityMatrix[2], 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LQGRegulator.html) for more details.*
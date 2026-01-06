# LQRegulatorGains

`LQRegulatorGains[sspec, wts]` gives the state feedback gains for the system specification sspec that minimizes a cost function with weights wts.

`LQRegulatorGains[..., "prop"]` gives the value of the property "prop".

## Examples

Compute LQ regulator gains for a state-space system:

```wolfram
sys = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, IdentityMatrix[2], {{0}, {0}}];
LQRegulatorGains[sys, {IdentityMatrix[2], {{1}}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LQRegulatorGains.html) for more details.*
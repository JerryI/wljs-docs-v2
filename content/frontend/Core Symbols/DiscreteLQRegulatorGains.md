# DiscreteLQRegulatorGains

`DiscreteLQRegulatorGains[sspec, wts, τ]` gives the discrete-time state feedback gains with sampling period τ for the continuous-time system specification sspec that minimizes a cost function with weights wts.

`DiscreteLQRegulatorGains[…, "prop"]` gives the value of the property "prop".

## Examples

```wolfram
sys = StateSpaceModel[{{0, 1}, {0, 0}}, {{0}, {1}}, IdentityMatrix[2], {{0}}];
DiscreteLQRegulatorGains[sys, {IdentityMatrix[2], {{1}}}, 0.1]
(* {{0.195, 0.587}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteLQRegulatorGains.html) for more details.*
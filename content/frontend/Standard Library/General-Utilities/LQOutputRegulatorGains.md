# LQOutputRegulatorGains

`LQOutputRegulatorGains[sspec, wts]` gives the state feedback gains for the system specification sspec that minimizes an output cost function with weights wts.

- `LQOutputRegulatorGains[..., "prop"]` gives the value of the property "prop".

## Examples

```wolfram
LQOutputRegulatorGains[StateSpaceModel[{{0, 1}, {-1, -2}}, {{0}, {1}}, {{1, 0}}], {1, 1}]
```

```wolfram
LQOutputRegulatorGains[sys, {q, r}, "GainMatrix"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LQOutputRegulatorGains.html) for more details.*
---
title: GainPhaseMargins
---

`GainPhaseMargins[lsys]` gives the gain and phase margins of the linear time-invariant system lsys.

## Examples

Calculate gain and phase margins:

```wolfram
sys = TransferFunctionModel[1/((s + 1)(s + 2)), s];
GainPhaseMargins[sys]
```

For a state-space system:

```wolfram
ssm = StateSpaceModel[{{-1}}, {{1}}, {{1}}, {{0}}];
GainPhaseMargins[ssm]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GainPhaseMargins.html) for more details.*
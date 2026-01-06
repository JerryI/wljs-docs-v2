---
title: PhaseMargins
---

`PhaseMargins[lsys]` gives the phase margins of the linear time-invariant system lsys.

Phase margin is a measure of stability in control systems, indicating how much additional phase lag can be tolerated before instability.

## Examples

```wolfram
PhaseMargins[TransferFunctionModel[1/(s^2 + s + 1), s]]
```

```wolfram
sys = TransferFunctionModel[10/(s (s + 1) (s + 5)), s];
PhaseMargins[sys]
```

```wolfram
PhaseMargins[StateSpaceModel[{{-1, 0}, {0, -2}}, {{1}, {1}}, {{1, 0}}, {{0}}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PhaseMargins.html) for more details.*
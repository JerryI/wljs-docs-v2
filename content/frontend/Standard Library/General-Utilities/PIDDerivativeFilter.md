---
title: PIDDerivativeFilter
---

`PIDDerivativeFilter` is an option to `PIDTune` that controls the filtering used for derivative terms.

## Examples

With derivative filter:

```wolfram
sys = TransferFunctionModel[1/(s^2 + s + 1), s];
PIDTune[sys, "PID", PIDDerivativeFilter -> 10]
```

Without filter:

```wolfram
PIDTune[sys, "PID", PIDDerivativeFilter -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PIDDerivativeFilter.html) for more details.*
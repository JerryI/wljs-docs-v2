# PIDTune

`PIDTune[sys]` gives a feedback PID controller for the system sys.

`PIDTune[sys, "carch"]` gives a controller of architecture "carch" ("P", "PI", "PID", etc).

`PIDTune[sys, {"carch", "trule"}]` gives a controller using the tuning rule "trule".

`PIDTune[sys, ..., "prop"]` returns the value for the property "prop".

## Examples

```wolfram
PIDTune[TransferFunctionModel[1/(s^2 + s + 1), s], "PID"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PIDTune.html) for more details.*
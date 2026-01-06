# PIDFeedforward

`PIDFeedforward` is an option to `PIDTune` that controls the reference weights used for the feedforward filter.

## Examples

Tune PID with feedforward:
```wolfram
PIDTune[plant, PIDFeedforward -> {1, 0.5}]
```

Disable feedforward:
```wolfram
PIDTune[system, PIDFeedforward -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PIDFeedforward.html) for more details.*
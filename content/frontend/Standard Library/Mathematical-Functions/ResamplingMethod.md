# ResamplingMethod

`ResamplingMethod` is an option for functions such as `TemporalData` and `MovingMap` that specifies how values in between given times should be computed.

## Examples

```wolfram
MovingMap[Mean, ts, 3, ResamplingMethod -> "LinearInterpolation"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResamplingMethod.html) for more details.*
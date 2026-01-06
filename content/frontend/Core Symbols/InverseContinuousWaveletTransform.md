# InverseContinuousWaveletTransform

`InverseContinuousWaveletTransform[cwd]` gives the inverse continuous wavelet transform of a `ContinuousWaveletData` object cwd.

- `InverseContinuousWaveletTransform[cwd, wave]` gives the inverse transform using the wavelet wave.
- `InverseContinuousWaveletTransform[cwd, wave, octvoc]` gives the inverse transform from the wavelet coefficients specified by octvoc.

## Examples

```wolfram
data = Table[Sin[2 Pi t] + 0.5 Sin[10 Pi t], {t, 0, 1, 0.01}];
cwd = ContinuousWaveletTransform[data];
InverseContinuousWaveletTransform[cwd]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseContinuousWaveletTransform.html) for more details.*
# WaveletScalogram

`WaveletScalogram[wd]` plots wavelet vector coefficients in a DiscreteWaveletData or ContinuousWaveletData object wd.

- `WaveletScalogram[wd, wind]` plots wavelet coefficients corresponding to the wavelet index specification wind.
- `WaveletScalogram[wd, wind, func]` applies func to coefficients before plotting.

## Examples

Create a wavelet scalogram from data:

```wolfram
data = Table[Sin[20 t] + Sin[50 t], {t, 0, 1, 0.001}];
wd = ContinuousWaveletTransform[data];
WaveletScalogram[wd]
```

With absolute value transformation:

```wolfram
WaveletScalogram[wd, All, Abs]
```

Discrete wavelet scalogram:

```wolfram
dwd = DiscreteWaveletTransform[data];
WaveletScalogram[dwd]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletScalogram.html) for more details.*
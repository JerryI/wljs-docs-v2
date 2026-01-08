---
title: InverseWaveletTransform
---

`InverseWaveletTransform[dwd]` gives the inverse wavelet transform of a `DiscreteWaveletData` object dwd.

- `InverseWaveletTransform[dwd, wave]` gives the inverse transform using the wavelet wave.
- `InverseWaveletTransform[dwd, wave, wind]` gives the inverse transform from the wavelet coefficients specified by wind.

## Examples

```wolfram
data = {1, 2, 3, 4, 5, 6, 7, 8};
dwd = DiscreteWaveletTransform[data];
InverseWaveletTransform[dwd]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseWaveletTransform.html) for more details.
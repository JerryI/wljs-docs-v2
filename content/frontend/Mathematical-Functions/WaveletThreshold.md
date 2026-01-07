---
title: WaveletThreshold
---

`WaveletThreshold[dwd]` thresholds the detail wavelet coefficients in the `DiscreteWaveletData` object dwd.

- `WaveletThreshold[dwd, tspec]` thresholds the coefficients using the thresholding specification tspec.
- `WaveletThreshold[dwd, tspec, wind]` thresholds the wavelet coefficients given by the wavelet indices wind.

## Examples

```wolfram
data = {1, 2, 3, 4, 5, 6, 7, 8};
dwd = DiscreteWaveletTransform[data];
WaveletThreshold[dwd]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletThreshold.html) for more details.*
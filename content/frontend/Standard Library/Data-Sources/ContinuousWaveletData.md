---
title: ContinuousWaveletData
---

`ContinuousWaveletData[{{oct1, voc1} -> coef1, ...}, wave]` yields a continuous wavelet data object with wavelet coefficients coefi corresponding to octave and voice {octi, voci} and wavelet wave.

## Examples

Create wavelet data from coefficients:

```wolfram
data = ContinuousWaveletTransform[Table[Sin[t], {t, 0, 10, 0.1}]];
data["Coefficients"]
```

Extract scalogram:

```wolfram
WaveletScalogram[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ContinuousWaveletData.html) for more details.*
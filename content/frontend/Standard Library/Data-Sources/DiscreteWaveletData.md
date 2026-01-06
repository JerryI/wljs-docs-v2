---
title: DiscreteWaveletData
---

`DiscreteWaveletData[{wind1 -> coef1, ...}, wave, wtrans]` yields a discrete wavelet data object with wavelet coefficients coefi corresponding to wavelet index windi.

`DiscreteWaveletData[{wind1 -> coef1, ...}, wave, wtrans, {d1, ...}]` assumes data dimensions {d1, ...}.

## Examples

Create wavelet data:

```wolfram
data = DiscreteWaveletTransform[Range[8]];
DiscreteWaveletData[Normal[data], HaarWavelet[], DiscreteWaveletTransform]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteWaveletData.html) for more details.*
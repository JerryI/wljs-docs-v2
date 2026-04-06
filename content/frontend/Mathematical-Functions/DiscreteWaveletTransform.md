---
title: DiscreteWaveletTransform
---

`DiscreteWaveletTransform[data]` gives the discrete wavelet transform (DWT) of an array of data.

`DiscreteWaveletTransform[data, wave]` gives the DWT using the wavelet wave.

`DiscreteWaveletTransform[data, wave, r]` gives the DWT using r levels of refinement.

## Examples

Basic wavelet transform:

```wolfram
DiscreteWaveletTransform[{1, 2, 3, 4, 5, 6, 7, 8}]
```

With Daubechies wavelet:

```wolfram
DiscreteWaveletTransform[Range[16], DaubechiesWavelet[4]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteWaveletTransform.html) for more details.
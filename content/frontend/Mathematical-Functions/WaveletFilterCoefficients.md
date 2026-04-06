---
title: WaveletFilterCoefficients
---

`WaveletFilterCoefficients[wave, filt]` gives the filter coefficients for the symbolic wavelet wave of type filt.

## Examples

Get lowpass filter coefficients for Daubechies wavelet:

```wolfram
WaveletFilterCoefficients[DaubechiesWavelet[4], "PrimalLowpass"]
```

Get highpass filter coefficients:

```wolfram
WaveletFilterCoefficients[HaarWavelet[], "PrimalHighpass"]
```

All filter types:

```wolfram
WaveletFilterCoefficients[DaubechiesWavelet[2], #] & /@ 
  {"PrimalLowpass", "PrimalHighpass", "DualLowpass", "DualHighpass"}
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletFilterCoefficients.html) for more details.
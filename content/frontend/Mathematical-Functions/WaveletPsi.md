---
title: WaveletPsi
---

`WaveletPsi[wave, x]` gives the wavelet function ψ(x) for the symbolic wavelet wave evaluated at x.

- `WaveletPsi[wave]` gives the wavelet function as a pure function.

## Examples

```wolfram
WaveletPsi[HaarWavelet[], 0.5]
```

```wolfram
Plot[WaveletPsi[DaubechiesWavelet[4], x], {x, 0, 7}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletPsi.html) for more details.
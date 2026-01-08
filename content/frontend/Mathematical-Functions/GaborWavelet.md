---
title: GaborWavelet
---

`GaborWavelet[]` represents a Gabor wavelet of frequency 6.

- `GaborWavelet[w]` represents a Gabor wavelet of frequency w.

## Examples

Create a default Gabor wavelet:

```wolfram
GaborWavelet[]
```

Create with custom frequency:

```wolfram
GaborWavelet[4]
```

Plot the wavelet:

```wolfram
Plot[Evaluate[GaborWavelet[][x]], {x, -5, 5}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GaborWavelet.html) for more details.
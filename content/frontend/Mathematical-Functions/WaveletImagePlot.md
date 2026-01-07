---
title: WaveletImagePlot
---

`WaveletImagePlot[dwd]` plots the basis tree of wavelet image coefficients in the DiscreteWaveletData dwd.

- `WaveletImagePlot[dwd, r]` plots coefficients up to refinement level r.
- `WaveletImagePlot[dwd, r, ifunc]` applies the image function ifunc to coefficients and wavelet indexes before plotting.

## Examples

Plot wavelet decomposition:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
dwd = DiscreteWaveletTransform[img];
WaveletImagePlot[dwd]
```

Limited refinement level:

```wolfram
WaveletImagePlot[dwd, 2]
```

With image function:

```wolfram
WaveletImagePlot[dwd, 3, ImageAdjust]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletImagePlot.html) for more details.*
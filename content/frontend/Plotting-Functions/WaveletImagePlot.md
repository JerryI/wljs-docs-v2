---
title: WaveletImagePlot
---

`WaveletImagePlot[dwd]` plots the basis tree of wavelet image coefficients in the DiscreteWaveletData dwd.

- `WaveletImagePlot[dwd, r]` plots coefficients up to refinement level r.
- `WaveletImagePlot[dwd, r, ifunc]` applies the image function ifunc to coefficients and wavelet indexes before plotting.

## Examples

Plot wavelet decomposition:

```wolfram
WaveletImagePlot[
 DiscreteWaveletTransform[
  Image[Table[Sin[i/10] Cos[j/10], {i, 64}, {j, 64}]]]]
```

Limited refinement level:

```wolfram
WaveletImagePlot[
 DiscreteWaveletTransform[
  Image[Table[Sin[i/10] Cos[j/10], {i, 64}, {j, 64}]]], 2]
```

With image function:

```wolfram
WaveletImagePlot[
 DiscreteWaveletTransform[
  Image[Table[Sin[i/10] Cos[j/10], {i, 64}, {j, 64}]]], 3, ImageAdjust]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletImagePlot.html) for more details.

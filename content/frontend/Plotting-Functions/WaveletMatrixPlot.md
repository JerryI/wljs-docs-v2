---
title: WaveletMatrixPlot
---

`WaveletMatrixPlot[dwd]` plots the basis tree of wavelet matrix coefficients in the DiscreteWaveletData dwd.

- `WaveletMatrixPlot[dwd, r]` plots coefficients up to refinement level r.
- `WaveletMatrixPlot[dwd, r, func]` applies func to coefficients before plotting.

## Examples

Create a wavelet matrix plot:

```wolfram
data = Table[Sin[20 t] + Cos[5 t], {t, 0, 1, 0.001}];
dwd = DiscreteWaveletTransform[data];
WaveletMatrixPlot[dwd]
```

Plot up to a specific refinement level:

```wolfram
WaveletMatrixPlot[dwd, 3]
```

Apply absolute value before plotting:

```wolfram
WaveletMatrixPlot[dwd, All, Abs]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletMatrixPlot.html) for more details.
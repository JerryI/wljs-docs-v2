---
title: WaveletMatrixPlot
---

`WaveletMatrixPlot[dwd]` plots the basis tree of wavelet matrix coefficients in the DiscreteWaveletData dwd.

- `WaveletMatrixPlot[dwd, r]` plots coefficients up to refinement level r.
- `WaveletMatrixPlot[dwd, r, func]` applies func to coefficients before plotting.

## Examples

Create a wavelet matrix plot:

```wolfram
data = Table[Sin[20 i/32] + Cos[5 j/32], {i, 0, 31}, {j, 0, 31}];
dwd = DiscreteWaveletTransform[data];
WaveletMatrixPlot[dwd]
```

Plot up to a specific refinement level:

```wolfram
data = Table[Sin[20 i/32] + Cos[5 j/32], {i, 0, 31}, {j, 0, 31}];
dwd = DiscreteWaveletTransform[data];
WaveletMatrixPlot[dwd, 3]
```

Apply absolute value before plotting:

```wolfram
data = Table[Sin[20 i/32] + Cos[5 j/32], {i, 0, 31}, {j, 0, 31}];
dwd = DiscreteWaveletTransform[data];
WaveletMatrixPlot[dwd, 3, Abs[#1] &]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WaveletMatrixPlot.html) for more details.

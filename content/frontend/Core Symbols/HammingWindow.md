# HammingWindow

`HammingWindow[x]` represents a Hamming window function of x.

The Hamming window is commonly used in signal processing and spectral analysis to reduce spectral leakage.

## Examples

```wolfram
HammingWindow[0.5]
```

```wolfram
Plot[HammingWindow[x], {x, -1/2, 1/2}]
```

```wolfram
(* Apply to a signal *)
ListLinePlot[Table[HammingWindow[x], {x, -0.5, 0.5, 0.01}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HammingWindow.html) for more details.*
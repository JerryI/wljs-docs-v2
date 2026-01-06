# NuttallWindow

`NuttallWindow[x]` represents a Nuttall window function of x.

The Nuttall window is a smoothing window used in signal processing with minimal spectral leakage.

## Examples

```wolfram
NuttallWindow[0.5]
```

```wolfram
Plot[NuttallWindow[x], {x, -1, 1}]
```

```wolfram
Periodogram[data, NuttallWindow]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NuttallWindow.html) for more details.*
# HannPoissonWindow

`HannPoissonWindow[x]` represents a Hann–Poisson window function of x.

- `HannPoissonWindow[x, α]` uses the parameter α.

This window function combines the properties of Hann and Poisson windows.

## Examples

```wolfram
HannPoissonWindow[0.5]
```

```wolfram
Plot[HannPoissonWindow[x], {x, -1, 1}]
```

```wolfram
Plot[HannPoissonWindow[x, 2], {x, -1, 1}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HannPoissonWindow.html) for more details.*
---
title: PoissonWindow
---

`PoissonWindow[x]` represents a Poisson window function of x.

- `PoissonWindow[x, α]` uses the parameter α.

Poisson windows are used in signal processing for spectral analysis.

## Examples

```wolfram
PoissonWindow[0.5]
```

```wolfram
Plot[PoissonWindow[x], {x, -1, 1}]
```

```wolfram
Plot[PoissonWindow[x, 2], {x, -1, 1}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PoissonWindow.html) for more details.*
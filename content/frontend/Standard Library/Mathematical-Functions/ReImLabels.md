---
title: ReImLabels
---

`ReImLabels` is an option for `ReImPlot` that specifies labels to use for the real and imaginary components.

## Examples

Custom labels:

```wolfram
ReImPlot[Sqrt[x], {x, -2, 2}, ReImLabels -> {"Real Part", "Imaginary Part"}]
```

Default labels:

```wolfram
ReImPlot[Exp[I x], {x, 0, 2 Pi}]
```

No labels:

```wolfram
ReImPlot[Sqrt[x], {x, -2, 2}, ReImLabels -> None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ReImLabels.html) for more details.*
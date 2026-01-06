---
title: AxesLabel
---

`AxesLabel` is an option that specifies labels for the axes. Use `{xlabel, ylabel}` for 2D plots or `{x, y, z}` for 3D.

## Examples

Add axis labels:

```wolfram
Plot[Sin[x], {x, 0, 2 Pi},
  AxesLabel -> {"Time (s)", "Amplitude"}
]

Plot3D[Sin[x] Cos[y], {x, 0, Pi}, {y, 0, Pi},
  AxesLabel -> {"x", "y", "z"}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AxesLabel.html) for more details.*
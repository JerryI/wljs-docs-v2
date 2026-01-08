---
title: AnglePath
---

`AnglePath[{θ1, θ2, θ3, ...}]` gives the list of 2D coordinates corresponding to a path that starts at {0,0}, then takes a series of steps of unit length at successive relative angles θi.

`AnglePath[{{r1, θ1}, {r2, θ2}, ...}]` takes successive steps of lengths ri.

`AnglePath[θ0, {step1, step2, ...}]` starts at angle θ0 with respect to the x axis.

## Examples

Create a simple angle path:

```wolfram
AnglePath[{0, Pi/4, Pi/4, Pi/4}]
```

Plot the path:

```wolfram
Graphics[Line[AnglePath[Table[Pi/6, 12]]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AnglePath.html) for more details.
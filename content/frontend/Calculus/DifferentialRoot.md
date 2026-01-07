---
title: DifferentialRoot
---

`DifferentialRoot[lde][x]` gives the holonomic function h(x), specified by the linear differential equation lde[h, x].

`DifferentialRoot[lde]` represents a pure holonomic function h.

## Examples

```wolfram
DifferentialRoot[Function[{y, x}, {y''[x] + y[x] == 0, y[0] == 0, y'[0] == 1}]][x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DifferentialRoot.html) for more details.*
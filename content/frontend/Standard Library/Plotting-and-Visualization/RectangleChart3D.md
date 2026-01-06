---
title: RectangleChart3D
---

`RectangleChart3D[{{x1, y1, z1}, {x2, y2, z2}, ...}]` makes a 3D rectangle chart with bars of width xi, depth yi, and height zi.

- `RectangleChart3D[{..., wi[{xi, yi, zi}, ...], ..., wj[{xi, yj, zj}, ...], ...}]` makes a 3D rectangle chart with bar features defined by the symbolic wrappers wk.
- `RectangleChart3D[{data1, data2, ...}]` makes a 3D rectangle chart from multiple datasets datai.

## Examples

```wolfram
RectangleChart3D[{{1, 1, 2}, {2, 1, 3}, {1, 2, 1}}]
```

```wolfram
RectangleChart3D[{{{1, 1, 2}, {1, 1, 3}}, {{2, 1, 1}, {2, 1, 2}}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RectangleChart3D.html) for more details.*
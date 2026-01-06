---
title: Scale
---

`Scale[g, s]` represents graphics primitives g scaled by a factor s.

`Scale[g, s, {x, y, ...}]` scales with the point {x, y, ...} kept fixed.

`Scale[g, {sx, sy, ...}, ...]` scales by different factors along different axes.

## Examples

Scale a rectangle:

```wolfram
Graphics[{Scale[Rectangle[], 0.5]}]
```

Scale with a fixed point:

```wolfram
Graphics[{Scale[Disk[], 2, {0, 0}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Scale.html) for more details.*
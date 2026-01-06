---
title: ViewRange
---

`ViewRange` is an option for Graphics3D and related functions which specifies the range of distances from the view point to be included in displaying a three-dimensional scene.

## Examples

Set a custom view range:

```wolfram
Graphics3D[Sphere[], ViewRange -> {1, 5}]
```

Use default view range:

```wolfram
Graphics3D[Cuboid[], ViewRange -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ViewRange.html) for more details.*
---
title: SolidAngle
---

`SolidAngle[p, {u1, ..., ud}]` gives the solid angle at the point p and spanned by the vectors u1, ..., ud.

- `SolidAngle[p, reg]` gives the solid angle subtended by the region reg.

## Examples

```wolfram
SolidAngle[{0, 0, 0}, {{1, 0, 0}, {0, 1, 0}, {0, 0, 1}}]
```

```wolfram
SolidAngle[{0, 0, 0}, Sphere[{1, 0, 0}, 0.5]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SolidAngle.html) for more details.
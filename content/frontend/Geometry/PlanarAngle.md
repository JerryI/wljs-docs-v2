---
title: PlanarAngle
---

`PlanarAngle[p -> {q1, q2}]` gives the angle between the half‐lines from p through q1 and q2.

- `PlanarAngle[{q1, p, q2}]` gives the angle at p formed by the triangle with vertex points p, q1, and q2.
- `PlanarAngle[..., "spec"]` gives the angle specified by "spec".

## Examples

```wolfram
PlanarAngle[{0, 0} -> {{1, 0}, {0, 1}}]
```

```wolfram
PlanarAngle[{{1, 0}, {0, 0}, {0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PlanarAngle.html) for more details.*
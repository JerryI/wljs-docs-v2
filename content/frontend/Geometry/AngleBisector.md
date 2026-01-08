---
title: AngleBisector
---

`AngleBisector[{q1, p, q2}]` gives the bisector of the interior angle at p formed by the triangle with vertex points p, q1 and q2.

`AngleBisector[{q1, p, q2}, "type"]` gives the angle bisector of the specified type.

## Examples

Find the angle bisector of a triangle:

```wolfram
AngleBisector[{{0, 0}, {1, 0}, {0, 1}}]
```

Visualize with graphics:

```wolfram
Graphics[{Triangle[{{0, 0}, {2, 0}, {1, 2}}], Red, AngleBisector[{{2, 0}, {0, 0}, {1, 2}}]}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/AngleBisector.html) for more details.
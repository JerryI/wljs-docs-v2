---
title: TriangleConstruct
---

`TriangleConstruct[tri, type]` gives the specified type of construct for the triangle tri.

## Examples

Centroid of a triangle:

```wolfram
tri = Triangle[{{0, 0}, {1, 0}, {0.5, 1}}];
TriangleConstruct[tri, "Centroid"]
```

Circumcircle:

```wolfram
TriangleConstruct[tri, "Circumcircle"]
```

Incircle:

```wolfram
TriangleConstruct[tri, "Incircle"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TriangleConstruct.html) for more details.
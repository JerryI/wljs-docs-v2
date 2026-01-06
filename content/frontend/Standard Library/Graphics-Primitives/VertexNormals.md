---
title: VertexNormals
---

`VertexNormals` is an option for graphics primitives which specifies the normal directions to assign to 3D vertices.

## Examples

```wolfram
Graphics3D[Polygon[{{0, 0, 0}, {1, 0, 0}, {0.5, 1, 0}}, VertexNormals -> {{0, 0, 1}, {0, 0, 1}, {0, 0, 1}}]]
```

```wolfram
Graphics3D[{Polygon[pts, VertexNormals -> norms]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VertexNormals.html) for more details.*
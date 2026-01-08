---
title: SnubPolyhedron
---

`SnubPolyhedron[poly]` gives the snub polyhedron of poly by truncating some corners.

## Examples

Create a snub cube from a cube:

```wolfram
SnubPolyhedron["Cube"]
```

Get the snub dodecahedron:

```wolfram
Graphics3D[SnubPolyhedron["Dodecahedron"]]
```

Compare with the original polyhedron:

```wolfram
GraphicsRow[{
  Graphics3D[Polyhedron["Tetrahedron"]],
  Graphics3D[SnubPolyhedron["Tetrahedron"]]
}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SnubPolyhedron.html) for more details.
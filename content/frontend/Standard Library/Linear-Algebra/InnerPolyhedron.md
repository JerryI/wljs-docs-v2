---
title: InnerPolyhedron
---

`InnerPolyhedron[poly]` gives the inner polyhedron of the polyhedron poly.

## Examples

Get the inner polyhedron of a stellated shape:
```wolfram
InnerPolyhedron[PolyhedronData["GreatStellatedDodecahedron"]]
```

Compute the inner polyhedron of a custom polyhedron:
```wolfram
poly = ConvexHullMesh[RandomPoint[Sphere[], 20]];
InnerPolyhedron[poly]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InnerPolyhedron.html) for more details.*
---
title: PolyhedronGenus
---

`PolyhedronGenus[poly]` gives the genus of the polyhedron poly.

The genus is a topological property that counts the number of "handles" on a surface.

## Examples

```wolfram
PolyhedronGenus[PolyhedronData["Cube"]]
```

```wolfram
PolyhedronGenus[PolyhedronData["Torus"]]
```

```wolfram
PolyhedronGenus[ConvexHullMesh[RandomPoint[Sphere[], 20]]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolyhedronGenus.html) for more details.*
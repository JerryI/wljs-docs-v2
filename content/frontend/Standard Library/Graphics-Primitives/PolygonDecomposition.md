---
title: PolygonDecomposition
---

`PolygonDecomposition[poly]` decomposes the polygon poly into a disjoint union of simpler polygons.

`PolygonDecomposition[poly, "type"]` decomposes into polygons of the specified "type".

## Examples

Decompose a polygon into convex parts:

```wolfram
PolygonDecomposition[Polygon[{{0,0},{2,0},{2,1},{1,1},{1,2},{0,2}}], "Convex"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PolygonDecomposition.html) for more details.*
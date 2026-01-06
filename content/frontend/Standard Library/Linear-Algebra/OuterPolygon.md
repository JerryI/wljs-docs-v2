---
title: OuterPolygon
---

`OuterPolygon[poly]` gives the outer polygon of the polygon poly.

## Examples

Get the outer polygon of a polygon with a hole:

```wolfram
OuterPolygon[Polygon[{{{0,0},{1,0},{1,1},{0,1}},{{0.2,0.2},{0.8,0.2},{0.8,0.8},{0.2,0.8}}}]]
(* Polygon[{{0,0},{1,0},{1,1},{0,1}}] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OuterPolygon.html) for more details.*
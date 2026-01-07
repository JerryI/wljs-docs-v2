---
title: Circumsphere
---

`Circumsphere[{p1, ..., pn+1}]` gives the sphere that circumscribes the points pi in n dimensions.

`Circumsphere[poly]` gives the circumsphere of a polyhedron or polygon poly.

## Examples

Circumsphere of a triangle:

```wolfram
Circumsphere[{{0, 0}, {1, 0}, {0.5, 1}}]
(* Sphere[{0.5, 0.375}, 0.625] *)
```

Circumsphere of a tetrahedron:

```wolfram
Circumsphere[{{0, 0, 0}, {1, 0, 0}, {0, 1, 0}, {0, 0, 1}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Circumsphere.html) for more details.*
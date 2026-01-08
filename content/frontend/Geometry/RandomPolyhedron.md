---
title: RandomPolyhedron
---

`RandomPolyhedron[spec]` gives a pseudorandom polyhedron with the specified specification spec.

- `RandomPolyhedron[spec, k]` gives a list of k pseudorandom polyhedra.

## Examples

Generate a random polyhedron:
```wolfram
RandomPolyhedron[{"ConvexHull", 10}]
```

Generate multiple random polyhedra:
```wolfram
RandomPolyhedron[{"ConvexHull", 8}, 5]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RandomPolyhedron.html) for more details.
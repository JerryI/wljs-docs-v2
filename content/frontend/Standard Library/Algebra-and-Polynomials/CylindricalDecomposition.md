---
title: CylindricalDecomposition
---

`CylindricalDecomposition[expr, {x1, x2, ...}]` finds a decomposition of the region represented by the statement expr into cylindrical parts whose directions correspond to the successive xi.

`CylindricalDecomposition[expr, {x1, x2, ...}, op]` finds a decomposition of the result of applying the topological operation op to the region represented by the statement expr.

`CylindricalDecomposition[expr, {x1, x2, ...}, "Function"]` represents the result as `CylindricalDecompositionFunction[...][x1, x2, ...]` that can be efficiently used in further computation.

## Examples

Decompose a circular region:

```wolfram
CylindricalDecomposition[x^2 + y^2 < 1, {x, y}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CylindricalDecomposition.html) for more details.*
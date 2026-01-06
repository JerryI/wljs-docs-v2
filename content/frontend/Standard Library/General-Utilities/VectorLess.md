---
title: VectorLess
---

`x ⪡ y` or `VectorLess[{x, y}]` yields `True` for vectors of length n if xi < yi for all components 1 ≤ i ≤ n.

- `x ⪡κ y` or `VectorLess[{x, y}, κ]` yields `True` for x and y if y - x ∈ interior(κ), where κ is a proper convex cone.

This provides element-wise comparison of vectors with respect to partial orderings.

## Examples

```wolfram
VectorLess[{{1, 2}, {3, 4}}]
```

```wolfram
VectorLess[{{1, 2, 3}, {4, 5, 6}}]
```

```wolfram
VectorLess[{{1, 1}, {2, 0}}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorLess.html) for more details.*
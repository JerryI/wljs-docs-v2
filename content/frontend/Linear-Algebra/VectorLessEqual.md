---
title: VectorLessEqual
---

`VectorLessEqual[{x, y}]` yields `True` for vectors of length n if xi ≤ yi for all components 1 ≤ i ≤ n.

- `VectorLessEqual[{x, y}, κ]` yields `True` for x and y if y - x ∈ κ, where κ is a proper convex cone.

## Examples

```wolfram
VectorLessEqual[{{1, 2}, {3, 4}}]
```

```wolfram
VectorLessEqual[{{1, 2, 3}, {2, 3, 4}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorLessEqual.html) for more details.
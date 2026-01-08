---
title: VectorGreaterEqual
---

`VectorGreaterEqual[{x, y}]` yields `True` for vectors of length n if xi ≥ yi for all components 1 ≤ i ≤ n.

- `VectorGreaterEqual[{x, y}, κ]` yields `True` for x and y if x - y ∈ κ, where κ is a proper convex cone.

## Examples

```wolfram
VectorGreaterEqual[{{5, 4, 3}, {2, 3, 1}}]
```

```wolfram
VectorGreaterEqual[{{1, 2}, {3, 4}}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VectorGreaterEqual.html) for more details.
---
title: SymbolicDeltaProductArray
---

`SymbolicDeltaProductArray[{n1, n2, ...}, {{j1,1, j1,2, ...}, {j2,1, j2,2, ...}, ...}]` represents an n1×n2×... array with elements equal to 1 if all index conditions are satisfied, and 0 otherwise.

## Examples

Create a simple delta product array:

```wolfram
SymbolicDeltaProductArray[{3, 3}, {{1, 2}}]
```

Identity-like array:

```wolfram
Normal[SymbolicDeltaProductArray[{3, 3}, {{1, 2}}]]
```

Multi-dimensional:

```wolfram
SymbolicDeltaProductArray[{2, 2, 2}, {{1, 2, 3}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SymbolicDeltaProductArray.html) for more details.*
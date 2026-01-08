---
title: SparseArray
---

`SparseArray[{pos1 -> v1, pos2 -> v2, ...}]` yields a sparse array with values at specified positions.

`SparseArray[list]` yields a sparse array version of list.

`SparseArray[data, dims, val]` uses val for unspecified elements.

## Examples

Create a sparse array with specific values:

```wolfram
SparseArray[{{1, 1} -> 1, {2, 2} -> 2, {3, 3} -> 3}]
(* SparseArray[..., {3, 3}] *)
```

Convert to normal array:

```wolfram
Normal[SparseArray[{{1, 1} -> 1, {2, 2} -> 1}, {2, 2}]]
(* {{1, 0}, {0, 1}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SparseArray.html) for more details.
---
title: SparseArrayQ
---

`SparseArrayQ[s]` yields `True` if s is a valid SparseArray object and `False` otherwise.

## Examples

Test a sparse array:

```wolfram
SparseArrayQ[SparseArray[{1, 0, 0, 2}]]
(* True *)
```

Test a regular list:

```wolfram
SparseArrayQ[{1, 0, 0, 2}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SparseArrayQ.html) for more details.
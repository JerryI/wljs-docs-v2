---
title: ArrayQ
---

`ArrayQ[expr]` gives `True` if expr is a full array or a `SparseArray` object, and gives `False` otherwise.

`ArrayQ[expr, patt]` requires expr to be a full array with a depth that matches the pattern patt.

`ArrayQ[expr, patt, test]` requires also that test yield `True` when applied to each of the array elements in expr.

## Examples

Check if an expression is an array:

```wolfram
ArrayQ[{{1, 2}, {3, 4}}]
(* True *)
```

Check for numeric arrays:

```wolfram
ArrayQ[{{1, 2}, {3, a}}, _, NumericQ]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ArrayQ.html) for more details.
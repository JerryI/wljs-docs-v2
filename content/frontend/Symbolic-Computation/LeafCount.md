---
title: LeafCount
---

`LeafCount[expr]` gives the total number of indivisible subexpressions (atoms) in expr.

## Examples

Count atoms in an expression:

```wolfram
LeafCount[{1, 2, 3}]
(* 3 *)
```

Complex expressions:

```wolfram
LeafCount[a + b*c]
(* 3 *)

LeafCount[x^2 + 3*x + 1]
(* 6 *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LeafCount.html) for more details.
---
title: Table
---

`Table[expr, n]` generates a list of n copies of expr.

`Table[expr, {i, imax}]` generates a list of the values of expr when i runs from 1 to imax.

`Table[expr, {i, imin, imax}]` starts with i=imin.

`Table[expr, {i, imin, imax, di}]` uses steps di.

## Examples

Generate a list of squares:

```wolfram
Table[i^2, {i, 5}]
(* {1, 4, 9, 16, 25} *)
```

Create a multiplication table:

```wolfram
Table[i*j, {i, 3}, {j, 3}]
(* {{1, 2, 3}, {2, 4, 6}, {3, 6, 9}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Table.html) for more details.
---
title: NullSpace
---

`NullSpace[m]` gives a list of vectors that forms a basis for the null space of the matrix m.

## Examples

Find null space:

```wolfram
NullSpace[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]
(* {{1, -2, 1}} *)
```

Verify null space vector:

```wolfram
{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}} . {1, -2, 1}
(* {0, 0, 0} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NullSpace.html) for more details.*
---
title: PositiveDefiniteMatrixQ
---

`PositiveDefiniteMatrixQ[m]` gives `True` if m is explicitly positive definite, and `False` otherwise.

## Examples

Test for positive definite:

```wolfram
PositiveDefiniteMatrixQ[{{2, -1}, {-1, 2}}]
(* True *)
```

Not positive definite:

```wolfram
PositiveDefiniteMatrixQ[{{1, 2}, {2, 1}}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PositiveDefiniteMatrixQ.html) for more details.
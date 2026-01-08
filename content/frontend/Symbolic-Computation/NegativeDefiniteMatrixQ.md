---
title: NegativeDefiniteMatrixQ
---

`NegativeDefiniteMatrixQ[m]` gives `True` if m is explicitly negative definite, and `False` otherwise.

## Examples

Test for negative definite:

```wolfram
NegativeDefiniteMatrixQ[{{-2, 0}, {0, -1}}]
(* True *)
```

Positive definite returns false:

```wolfram
NegativeDefiniteMatrixQ[{{1, 0}, {0, 1}}]
(* False *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NegativeDefiniteMatrixQ.html) for more details.
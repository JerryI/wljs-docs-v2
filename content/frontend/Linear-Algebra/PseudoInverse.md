---
title: PseudoInverse
---

`PseudoInverse[m]` finds the pseudoinverse (Moore-Penrose inverse) of a rectangular matrix.

## Examples

Pseudoinverse of a rectangular matrix:

```wolfram
PseudoInverse[{{1, 2}, {3, 4}, {5, 6}}]
(* {{-4/3, -1/3, 2/3}, {13/12, 1/3, -5/12}} *)
```

For a square matrix equals inverse:

```wolfram
PseudoInverse[{{1, 2}, {3, 4}}]
(* {{-2, 1}, {3/2, -1/2}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PseudoInverse.html) for more details.
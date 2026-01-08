---
title: Symmetrize
---

`Symmetrize[tensor, sym]` returns the symmetrization of tensor under the symmetry sym.

## Examples

Symmetrize a matrix:

```wolfram
Symmetrize[{{a, b}, {c, d}}]
(* {{a, (b + c)/2}, {(b + c)/2, d}} *)
```

Antisymmetrize:

```wolfram
Symmetrize[{{a, b}, {c, d}}, Antisymmetric[{1, 2}]]
(* {{0, (b - c)/2}, {(-b + c)/2, 0}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Symmetrize.html) for more details.*
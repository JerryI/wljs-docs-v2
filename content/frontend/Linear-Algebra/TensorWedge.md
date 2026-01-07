---
title: TensorWedge
---

`TensorWedge[tensor1, tensor2, ...]` represents the antisymmetrized tensor product of the tensori.

## Examples

Wedge product of vectors:

```wolfram
TensorWedge[{a, b}, {c, d}]
(* {{0, a d - b c}, {-a d + b c, 0}} *)
```

Triple wedge product:

```wolfram
TensorWedge[{1, 0, 0}, {0, 1, 0}, {0, 0, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TensorWedge.html) for more details.*
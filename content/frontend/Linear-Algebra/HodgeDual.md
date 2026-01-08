---
title: HodgeDual
---

`HodgeDual[tensor]` gives the Hodge dual of the tensor.

`HodgeDual[tensor, dim]` dualizes tensor in the slots with dimension dim.

## Examples

Hodge dual in 3D:

```wolfram
HodgeDual[{a, b, c}]
(* {{0, c, -b}, {-c, 0, a}, {b, -a, 0}} *)
```

Dual of a 2-form:

```wolfram
HodgeDual[{{0, 1}, {-1, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HodgeDual.html) for more details.*
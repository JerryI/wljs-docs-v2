---
title: Jacobian
---

`Jacobian` is an option for `FindRoot`. `Jacobian -> Automatic` attempts symbolic computation of the Jacobian of the system of functions whose root is being sought.

## Examples

Use a symbolic Jacobian in FindRoot:

```wolfram
FindRoot[{x^2 + y^2 - 1, x - y}, {{x, 0.5}, {y, 0.5}}, Jacobian -> Automatic]
(* {x -> 0.707107, y -> 0.707107} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Jacobian.html) for more details.*
---
title: CarlemanLinearize
---

`CarlemanLinearize[sys, spec]` Carleman linearizes the nonlinear state-space model sys according to spec.

## Examples

Linearize a system:

```wolfram
sys = NonlinearStateSpaceModel[{x'[t] == x[t]^2}, {x[t]}, {}, t];
CarlemanLinearize[sys, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CarlemanLinearize.html) for more details.*
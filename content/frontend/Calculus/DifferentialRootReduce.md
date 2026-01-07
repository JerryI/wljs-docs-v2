---
title: DifferentialRootReduce
---

`DifferentialRootReduce[expr, x]` attempts to reduce expr to a single `DifferentialRoot` object as a function of x.

`DifferentialRootReduce[expr, {x, x0}]` takes the initial conditions to be specified at x=x0.

## Examples

Reduce a holonomic expression:

```wolfram
DifferentialRootReduce[Sin[x] + Cos[x], x]
(* DifferentialRoot[...] *)
```

With initial point:

```wolfram
DifferentialRootReduce[Exp[x], {x, 0}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DifferentialRootReduce.html) for more details.*
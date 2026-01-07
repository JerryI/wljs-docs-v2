---
title: MaxIterations
---

`MaxIterations` is an option that specifies the maximum number of iterations that should be tried in various built-in functions and algorithms.

## Examples

Use with FindRoot:

```wolfram
FindRoot[Cos[x] == x, {x, 0}, MaxIterations -> 100]
```

With iterative functions:

```wolfram
NestWhile[# + 1 &, 0, # < 10 &, 1, 5]
(* limited by MaxIterations equivalent *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxIterations.html) for more details.*
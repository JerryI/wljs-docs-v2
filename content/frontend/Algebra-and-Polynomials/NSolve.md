---
title: NSolve
---

`NSolve[expr, vars]` attempts to find numerical approximations to the solutions of the system.

`NSolve[expr, vars, Reals]` finds solutions over the real numbers.

## Examples

Numerical solutions:

```wolfram
NSolve[x^3 - 2 == 0, x]
(* {{x -> 1.2599}, {x -> -0.62996 - 1.0911 I}, {x -> -0.62996 + 1.0911 I}} *)
```

Real solutions only:

```wolfram
NSolve[x^3 - 2 == 0, x, Reals]
(* {{x -> 1.2599}} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NSolve.html) for more details.
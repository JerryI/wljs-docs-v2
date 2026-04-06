---
title: RSolve
---

`RSolve[eqn, a[n], n]` solves a recurrence equation for a[n].

`RSolve[{eqn1, eqn2, ...}, {a1[n], a2[n], ...}, n]` solves a system of recurrence equations.

`RSolve[eqn, a[n1, n2, ...], {n1, n2, ...}]` solves a partial recurrence equation.

## Examples

Solve a simple recurrence:

```wolfram
RSolve[a[n] == 2 a[n - 1], a[n], n]
(* {{a[n] -> 2^n C[1]}} *)
```

Solve with initial condition:

```wolfram
RSolve[{a[n] == a[n - 1] + 1, a[0] == 0}, a[n], n]
(* {{a[n] -> n}} *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RSolve.html) for more details.
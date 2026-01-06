# DSolve

`DSolve[eqn, u, x]` solves a differential equation for the function u with independent variable x.

## Examples

Solve a first-order ODE:

```wolfram
DSolve[y'[x] == y[x], y, x]
(* {{y -> Function[{x}, E^x C[1]]}} *)
```

Solve with initial condition:

```wolfram
DSolve[{y'[x] == y[x], y[0] == 1}, y, x]
(* {{y -> Function[{x}, E^x]}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DSolve.html) for more details.*
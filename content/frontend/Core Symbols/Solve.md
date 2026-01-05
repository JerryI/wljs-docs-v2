# Solve

`Solve[expr, vars]` attempts to solve the system expr of equations or inequalities for the variables vars.

`Solve[expr, vars, dom]` solves over the domain dom. Common choices are `Reals`, `Integers`, and `Complexes`.

## Examples

Solve a linear equation:

```wolfram
Solve[x + 2 == 5, x]
(* {{x -> 3}} *)
```

Solve a quadratic equation:

```wolfram
Solve[x^2 - 4 == 0, x]
(* {{x -> -2}, {x -> 2}} *)
```

Solve a system of equations:

```wolfram
Solve[{x + y == 3, x - y == 1}, {x, y}]
(* {{x -> 2, y -> 1}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Solve.html) for more details.*
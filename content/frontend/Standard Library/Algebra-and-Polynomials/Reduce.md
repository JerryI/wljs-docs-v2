# Reduce

`Reduce[expr, vars]` reduces the statement expr by solving equations or inequalities for vars.

`Reduce[expr, vars, dom]` does the reduction over the specified domain.

## Examples

Solve an equation:

```wolfram
Reduce[x^2 - 4 == 0, x]
(* x == -2 || x == 2 *)
```

With domain:

```wolfram
Reduce[x^2 == 2, x, Reals]
(* x == -Sqrt[2] || x == Sqrt[2] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Reduce.html) for more details.*
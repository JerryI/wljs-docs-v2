# Inactive

`Inactive[f]` is an inactive form of f that does not evaluate.

## Examples

Create an inactive integral:

```wolfram
Inactive[Integrate][x^2, x]
```

Activate the expression to evaluate it:

```wolfram
Activate[Inactive[Integrate][x^2, x]]
(* x^3/3 *)
```

Use inactive forms to represent unevaluated operations:

```wolfram
Inactive[Plus][1, 2, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Inactive.html) for more details.*
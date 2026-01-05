# Collect

`Collect[expr, x]` collects together terms involving the same powers of objects matching x.

## Examples

Collect terms in x:

```wolfram
Collect[a*x + b*x + c*x^2, x]
(* c x^2 + (a + b) x *)
```

Collect with multiple variables:

```wolfram
Collect[Expand[(x + y + 1)^3], {x, y}]
(* 1 + 3 y + 3 y^2 + y^3 + (3 + 6 y + 3 y^2) x + (3 + 3 y) x^2 + x^3 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Collect.html) for more details.*
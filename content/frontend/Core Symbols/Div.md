# Div

`Div[{f1, ..., fn}, {x1, ..., xn}]` gives the divergence ∂f1/∂x1 + ... + ∂fn/∂xn.

## Examples

Divergence of a vector field:

```wolfram
Div[{x^2, y^2, z^2}, {x, y, z}]
(* 2x + 2y + 2z *)
```

2D divergence:

```wolfram
Div[{x, y}, {x, y}]
(* 2 *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Div.html) for more details.*
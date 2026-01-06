# Maximize

`Maximize[f, x]` maximizes f symbolically with respect to x.

## Examples

Symbolic maximum:

```wolfram
Maximize[-x^2 + 4x + 5, x]
(* {9, {x -> 2}} *)
```

With constraints:

```wolfram
Maximize[{x + y, x^2 + y^2 <= 1}, {x, y}]
(* {Sqrt[2], {x -> 1/Sqrt[2], y -> 1/Sqrt[2]}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Maximize.html) for more details.*
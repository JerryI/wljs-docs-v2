# MellinTransform

`MellinTransform[expr, x, s]` gives the Mellin transform of expr.

- `MellinTransform[expr, {x1, x2, ...}, {s1, s2, ...}]` gives the multidimensional Mellin transform of expr.

## Examples

Mellin transform of a simple function:

```wolfram
MellinTransform[Exp[-x], x, s]
(* Gamma[s] *)
```

Transform of power function:

```wolfram
MellinTransform[x^a Exp[-x], x, s]
```

Multidimensional transform:

```wolfram
MellinTransform[Exp[-x - y], {x, y}, {s, t}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MellinTransform.html) for more details.*
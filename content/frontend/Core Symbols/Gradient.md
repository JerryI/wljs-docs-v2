# Gradient

`Gradient` is an option for `FindMinimum` and related functions that specifies the gradient vector for the function being optimized.

## Examples

Provide an explicit gradient:

```wolfram
FindMinimum[x^2 + y^2, {{x, 1}, {y, 1}}, 
  Gradient -> {2 x, 2 y}]
```

Use symbolic gradient:

```wolfram
FindMinimum[{f[x, y], Gradient -> {D[f[x, y], x], D[f[x, y], y]}}, {{x, 0}, {y, 0}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Gradient.html) for more details.*
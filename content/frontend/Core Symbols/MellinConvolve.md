# MellinConvolve

`MellinConvolve[f, g, x, y]` gives the Mellin convolution with respect to x of the expressions f and g.

- `MellinConvolve[f, g, {x1, x2, ...}, {y1, y2, ...}]` gives the multidimensional Mellin convolution.

## Examples

```wolfram
MellinConvolve[Exp[-x], Exp[-x], x, y]
```

```wolfram
MellinConvolve[x^2, x^3, x, y]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MellinConvolve.html) for more details.*
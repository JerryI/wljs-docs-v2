# DiscreteConvolve

`DiscreteConvolve[f, g, n, m]` gives the convolution with respect to n of the expressions f and g.

`DiscreteConvolve[f, g, {n1, n2, ...}, {m1, m2, ...}]` gives the multidimensional convolution.

## Examples

Convolve two sequences:

```wolfram
DiscreteConvolve[UnitStep[n], UnitStep[n], n, m]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiscreteConvolve.html) for more details.*
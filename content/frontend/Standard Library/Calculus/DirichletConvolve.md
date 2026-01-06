# DirichletConvolve

`DirichletConvolve[f, g, n, m]` gives the Dirichlet convolution of expressions f and g.

## Examples

Convolve arithmetic functions:

```wolfram
DirichletConvolve[1, MoebiusMu[n], n, m]
(* DiscreteDelta[m - 1] *)
```

Identity convolution:

```wolfram
DirichletConvolve[f[n], DiscreteDelta[n - 1], n, m]
(* f[m] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DirichletConvolve.html) for more details.*
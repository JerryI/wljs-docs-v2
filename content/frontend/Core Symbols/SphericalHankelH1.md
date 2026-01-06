# SphericalHankelH1

`SphericalHankelH1[n, z]` gives the spherical Hankel function of the first kind h_n^(1)(z).

## Examples

Evaluate the spherical Hankel function:

```wolfram
SphericalHankelH1[1, 2.0]
```

Symbolic expression:

```wolfram
SphericalHankelH1[0, z]
```

Plot the function:

```wolfram
Plot[{Re[SphericalHankelH1[1, x]], Im[SphericalHankelH1[1, x]]}, 
  {x, 0.1, 10}, PlotLegends -> {"Re", "Im"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SphericalHankelH1.html) for more details.*
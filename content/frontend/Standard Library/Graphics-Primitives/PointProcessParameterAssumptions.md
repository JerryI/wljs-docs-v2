# PointProcessParameterAssumptions

`PointProcessParameterAssumptions[proc]` gives a logical expression for assumptions on parameters in the point process proc.

## Examples

Poisson process assumptions:

```wolfram
PointProcessParameterAssumptions[PoissonPointProcess[λ]]
(* λ > 0 *)
```

Inhomogeneous process:

```wolfram
PointProcessParameterAssumptions[InhomogeneousPoissonPointProcess[f, region]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointProcessParameterAssumptions.html) for more details.*
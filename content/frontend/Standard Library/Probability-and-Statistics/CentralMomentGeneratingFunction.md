# CentralMomentGeneratingFunction

`CentralMomentGeneratingFunction[dist, t]` gives the central moment-generating function for the distribution dist as a function of t.

`CentralMomentGeneratingFunction[dist, {t1, t2, ...}]` gives the central moment-generating function for a multivariate distribution.

## Examples

Central moment-generating function for a normal distribution:

```wolfram
CentralMomentGeneratingFunction[NormalDistribution[μ, σ], t]
(* E^((σ^2*t^2)/2) *)
```

For a Poisson distribution:

```wolfram
CentralMomentGeneratingFunction[PoissonDistribution[λ], t]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CentralMomentGeneratingFunction.html) for more details.*
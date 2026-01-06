# CumulantGeneratingFunction

`CumulantGeneratingFunction[dist, t]` gives the cumulant-generating function for the distribution dist as a function of the variable t.

`CumulantGeneratingFunction[dist, {t1, t2, ...}]` gives the cumulant-generating function for the multivariate distribution dist as a function of the variables t1, t2, ....

## Examples

Cumulant generating function of normal distribution:

```wolfram
CumulantGeneratingFunction[NormalDistribution[μ, σ], t]
(* μ t + (σ^2 t^2)/2 *)
```

For Poisson distribution:

```wolfram
CumulantGeneratingFunction[PoissonDistribution[λ], t]
(* λ (E^t - 1) *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CumulantGeneratingFunction.html) for more details.*
---
title: InverseGaussianDistribution
---

`InverseGaussianDistribution[μ,λ]` represents an inverse Gaussian distribution with mean μ and scale parameter λ.

`InverseGaussianDistribution[μ,λ,θ]` represents a generalized inverse Gaussian distribution with parameters μ, λ, and θ.

## Examples

Create an inverse Gaussian distribution:

```wolfram
dist = InverseGaussianDistribution[1, 2]
(* InverseGaussianDistribution[1, 2] *)
```

Compute the mean:

```wolfram
Mean[InverseGaussianDistribution[3, 1]]
(* 3 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InverseGaussianDistribution.html) for more details.
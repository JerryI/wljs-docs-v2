# GammaDistribution

`GammaDistribution[α, β]` represents a gamma distribution with shape parameter α and scale parameter β.

## Examples

Generate random samples:

```wolfram
RandomVariate[GammaDistribution[2, 1], 5]
```

Mean and variance:

```wolfram
{Mean[GammaDistribution[α, β]], Variance[GammaDistribution[α, β]]}
(* {α β, α β^2} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GammaDistribution.html) for more details.*
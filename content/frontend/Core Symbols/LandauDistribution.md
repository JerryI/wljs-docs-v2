# LandauDistribution

`LandauDistribution[μ, σ]` represents a Landau distribution with location parameter μ and scale parameter σ.

- `LandauDistribution[]` represents a Landau distribution with location parameter 0 and scale parameter 1.

## Examples

```wolfram
dist = LandauDistribution[0, 1];
PDF[dist, x]
```

```wolfram
RandomVariate[LandauDistribution[2, 0.5], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LandauDistribution.html) for more details.*
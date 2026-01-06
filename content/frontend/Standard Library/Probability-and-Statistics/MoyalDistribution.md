# MoyalDistribution

`MoyalDistribution[μ, σ]` represents a Moyal distribution with location parameter μ and scale parameter σ.

- `MoyalDistribution[]` represents a Moyal distribution with location parameter 0 and scale parameter 1.

## Examples

Create a Moyal distribution:
```wolfram
dist = MoyalDistribution[0, 1];
PDF[dist, x]
```

Sample from the distribution:
```wolfram
RandomVariate[MoyalDistribution[2, 0.5], 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MoyalDistribution.html) for more details.*
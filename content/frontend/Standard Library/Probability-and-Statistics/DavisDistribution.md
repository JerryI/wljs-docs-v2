# DavisDistribution

`DavisDistribution[b,n,μ]` represents a Davis distribution with scale parameter b, shape parameter n, and location parameter μ.

## Examples

Create a Davis distribution:

```wolfram
dist = DavisDistribution[1, 2, 0];
Mean[dist]
```

Sample from the distribution:

```wolfram
RandomVariate[DavisDistribution[1, 2, 0], 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DavisDistribution.html) for more details.*
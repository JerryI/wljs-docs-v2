# KDistribution

`KDistribution[ν, w]` represents a K distribution with shape parameters ν and w.

## Examples

Create a K distribution:
```wolfram
dist = KDistribution[2, 1];
PDF[dist, x]
```

Sample from the distribution:
```wolfram
RandomVariate[KDistribution[3, 2], 10]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/KDistribution.html) for more details.*
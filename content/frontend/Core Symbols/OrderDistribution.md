# OrderDistribution

`OrderDistribution[{dist, n}, k]` represents the kth-order statistics distribution for n observations from the distribution dist.

- `OrderDistribution[{dist, n}, {k1, k2, ...}]` represents the joint (k1,k2,...)th-order statistics distribution.
- `OrderDistribution[{dist1, ..., distn}, ...]` represents the order statistics for independent distributions.
- `OrderDistribution[mdist, ...]` represents the order statistics for multivariate distribution mdist.

## Examples

```wolfram
OrderDistribution[{NormalDistribution[], 10}, 5]
```

```wolfram
Mean[OrderDistribution[{UniformDistribution[], 5}, 3]]
```

```wolfram
PDF[OrderDistribution[{ExponentialDistribution[1], 3}, 1], x]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrderDistribution.html) for more details.*
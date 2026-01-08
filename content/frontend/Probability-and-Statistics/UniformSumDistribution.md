---
title: UniformSumDistribution
---

`UniformSumDistribution[n]` represents the distribution of a sum of n random variables uniformly distributed from 0 to 1.

- `UniformSumDistribution[n, {min, max}]` represents the sum of n uniform random variables from min to max.

Also known as the Irwin-Hall distribution.

## Examples

```wolfram
UniformSumDistribution[3]
```

```wolfram
Mean[UniformSumDistribution[10]]
```

```wolfram
Plot[PDF[UniformSumDistribution[5], x], {x, 0, 5}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniformSumDistribution.html) for more details.
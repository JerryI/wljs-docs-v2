---
title: StationaryDistribution
---

`StationaryDistribution[proc]` represents the stationary distribution of the process proc, when it exists.

## Examples

Stationary distribution of a Markov process:

```wolfram
mp = DiscreteMarkovProcess[{1, 0}, {{0.5, 0.5}, {0.3, 0.7}}];
StationaryDistribution[mp]
```

Generate from stationary distribution:

```wolfram
RandomVariate[StationaryDistribution[mp], 5]
```

Stationary probability:

```wolfram
PDF[StationaryDistribution[mp], 1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StationaryDistribution.html) for more details.
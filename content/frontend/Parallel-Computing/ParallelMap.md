---
title: ParallelMap
---

`ParallelMap[f, expr]` applies f in parallel to each element on the first level in expr.

- `ParallelMap[f, expr, levelspec]` applies f in parallel to parts of expr specified by levelspec.

This function distributes computations across parallel kernels for improved performance.

## Examples

```wolfram
ParallelMap[FactorInteger, Range[100, 110]]
```

```wolfram
ParallelMap[N[#, 100] &, {Pi, E, GoldenRatio}]
```

```wolfram
ParallelMap[PrimeQ, Range[1000], {1}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ParallelMap.html) for more details.
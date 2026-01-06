# SinghMaddalaDistribution

`SinghMaddalaDistribution[q, a, b]` represents the Singh–Maddala distribution with shape parameters q and a and scale parameter b.

The Singh–Maddala distribution (also known as the Burr Type XII distribution) is used in economics for modeling income distributions.

## Examples

```wolfram
dist = SinghMaddalaDistribution[2, 3, 1];
PDF[dist, x]
```

```wolfram
Mean[SinghMaddalaDistribution[3, 2, 1]]
```

```wolfram
RandomVariate[SinghMaddalaDistribution[2, 2, 1], 5]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SinghMaddalaDistribution.html) for more details.*
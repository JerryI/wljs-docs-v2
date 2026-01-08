---
title: SuzukiDistribution
---

`SuzukiDistribution[μ, ν]` represents the Suzuki distribution with shape parameters μ and ν.

The Suzuki distribution is used to model fading in wireless communications.

## Examples

```wolfram
dist = SuzukiDistribution[1, 2]
```

```wolfram
Mean[SuzukiDistribution[1, 1]]
```

```wolfram
Plot[PDF[SuzukiDistribution[1, 2], x], {x, 0, 5}]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SuzukiDistribution.html) for more details.
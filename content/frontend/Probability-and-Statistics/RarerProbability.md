---
title: RarerProbability
---

`RarerProbability[dist, example]` computes the probability for distribution dist to generate a sample that has a lower or equal PDF than example.

- `RarerProbability[dist, {ex1, ex2, ...}]` computes the rarer probability for each exi.

## Examples

```wolfram
RarerProbability[NormalDistribution[], 2]
```

```wolfram
RarerProbability[PoissonDistribution[3], {0, 1, 5, 10}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RarerProbability.html) for more details.
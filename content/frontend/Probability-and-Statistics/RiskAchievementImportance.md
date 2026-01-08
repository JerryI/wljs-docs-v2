---
title: RiskAchievementImportance
---

`RiskAchievementImportance[rdist, t]` gives the risk achievement importances for all components in the `ReliabilityDistribution` rdist at time t.

- `RiskAchievementImportance[fdist, t]` gives the risk achievement importances for all components in the `FailureDistribution` fdist at time t.

## Examples

```wolfram
RiskAchievementImportance[ReliabilityDistribution[a && b, {a, b}], 1]
```

```wolfram
RiskAchievementImportance[rdist, 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RiskAchievementImportance.html) for more details.
---
title: RiskReductionImportance
---

`RiskReductionImportance[rdist, t]` gives the risk reduction importances for all components in the `ReliabilityDistribution` rdist at time t.

`RiskReductionImportance[fdist, t]` gives the risk reduction importances for all components in the `FailureDistribution` fdist at time t.

## Examples

```wolfram
RiskReductionImportance[ReliabilityDistribution[a && b, {a \[Distributed] ExponentialDistribution[1], b \[Distributed] ExponentialDistribution[2]}], 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RiskReductionImportance.html) for more details.
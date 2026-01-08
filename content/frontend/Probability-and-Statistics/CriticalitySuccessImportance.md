---
title: CriticalitySuccessImportance
---

`CriticalitySuccessImportance[rdist, t]` gives the criticality success importances for all components in the ReliabilityDistribution rdist at time t.

`CriticalitySuccessImportance[fdist, t]` gives the criticality success importances for all components in the FailureDistribution fdist at time t.

## Examples

Calculate criticality success importance:

```wolfram
rdist = ReliabilityDistribution[a || b, {{a, 0.9}, {b, 0.8}}];
CriticalitySuccessImportance[rdist, 1]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CriticalitySuccessImportance.html) for more details.
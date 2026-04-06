---
title: CriticalityFailureImportance
---

`CriticalityFailureImportance[rdist, t]` gives the criticality failure importances for all components in the ReliabilityDistribution rdist at time t.

`CriticalityFailureImportance[fdist, t]` gives the criticality failure importances for all components in the FailureDistribution fdist at time t.

## Examples

Calculate criticality failure importance:

```wolfram
rdist = ReliabilityDistribution[a && b, {{a, 0.9}, {b, 0.8}}];
CriticalityFailureImportance[rdist, 1]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CriticalityFailureImportance.html) for more details.
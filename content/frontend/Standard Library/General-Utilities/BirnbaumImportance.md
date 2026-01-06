---
title: BirnbaumImportance
---

`BirnbaumImportance[rdist, t]` gives the Birnbaum importances for all components in the ReliabilityDistribution rdist at time t.

`BirnbaumImportance[fdist, t]` gives the Birnbaum importances for all components in the FailureDistribution fdist at time t.

## Examples

Calculate component importance:

```wolfram
rdist = ReliabilityDistribution[a && b, {{a, 0.9}, {b, 0.8}}];
BirnbaumImportance[rdist, 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BirnbaumImportance.html) for more details.*
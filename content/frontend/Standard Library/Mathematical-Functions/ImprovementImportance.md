---
title: ImprovementImportance
---

`ImprovementImportance[rdist, t]` gives the improvement importances for all components in the ReliabilityDistribution rdist at time t.

- `ImprovementImportance[fdist, t]` gives the improvement importances for all components in the FailureDistribution fdist at time t.

## Examples

```wolfram
ImprovementImportance[
  ReliabilityDistribution[a && b, {a \[Distributed] ExponentialDistribution[1], 
    b \[Distributed] ExponentialDistribution[2]}], 1]
```

```wolfram
ImprovementImportance[
  FailureDistribution[a || b, {a \[Distributed] ExponentialDistribution[1], 
    b \[Distributed] ExponentialDistribution[2]}], 1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ImprovementImportance.html) for more details.*
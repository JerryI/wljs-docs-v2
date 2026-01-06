---
title: BarlowProschanImportance
---

`BarlowProschanImportance[rdist]` gives the Barlow–Proschan importances for all components in the ReliabilityDistribution rdist.

`BarlowProschanImportance[fdist]` gives the Barlow–Proschan importances for all components in the FailureDistribution fdist.

## Examples

Compute component importance:

```wolfram
rdist = ReliabilityDistribution[a && b, {{a, 0.9}, {b, 0.8}}];
BarlowProschanImportance[rdist]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BarlowProschanImportance.html) for more details.*
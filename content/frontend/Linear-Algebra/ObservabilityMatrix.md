---
title: ObservabilityMatrix
---

`ObservabilityMatrix[ssm]` gives the observability matrix of the state-space model ssm.

## Examples

Compute the observability matrix of a state-space model:

```wolfram
ssm = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, {{1, 0}}, {{0}}];
ObservabilityMatrix[ssm]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ObservabilityMatrix.html) for more details.*
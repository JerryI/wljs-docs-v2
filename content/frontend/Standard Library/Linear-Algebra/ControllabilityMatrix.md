---
title: ControllabilityMatrix
---

`ControllabilityMatrix[ssm]` gives the controllability matrix of the state-space model ssm.

## Examples

Compute the controllability matrix of a state-space model:

```wolfram
ssm = StateSpaceModel[{{0, 1}, {-2, -3}}, {{0}, {1}}, {{1, 0}}, {{0}}];
ControllabilityMatrix[ssm]
(* {{0, 1}, {1, -3}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ControllabilityMatrix.html) for more details.*
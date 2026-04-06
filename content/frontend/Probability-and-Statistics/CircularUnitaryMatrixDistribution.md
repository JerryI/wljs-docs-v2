---
title: CircularUnitaryMatrixDistribution
---

`CircularUnitaryMatrixDistribution[n]` represents a circular unitary matrix distribution with matrix dimensions {n, n}.

## Examples

Sample a random unitary matrix:

```wolfram
m = RandomVariate[CircularUnitaryMatrixDistribution[3]];
Chop[m . ConjugateTranspose[m]]
(* IdentityMatrix[3] *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CircularUnitaryMatrixDistribution.html) for more details.
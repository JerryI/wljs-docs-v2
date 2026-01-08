---
title: CircularOrthogonalMatrixDistribution
---

`CircularOrthogonalMatrixDistribution[n]` represents a circular orthogonal matrix distribution with matrix dimensions {n, n}.

## Examples

Sample a random orthogonal matrix:

```wolfram
RandomVariate[CircularOrthogonalMatrixDistribution[3]]
(* {{...}, {...}, {...}} *)
```

Verify orthogonality:

```wolfram
m = RandomVariate[CircularOrthogonalMatrixDistribution[2]];
Chop[m . ConjugateTranspose[m]]
(* IdentityMatrix[2] *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CircularOrthogonalMatrixDistribution.html) for more details.
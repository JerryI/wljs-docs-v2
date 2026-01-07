---
title: DiracComb
---

`DiracComb[x]` represents the Dirac comb function giving a delta function at every integer point.

`DiracComb[x1, x2, ...]` represents the multidimensional Dirac comb function.

## Examples

Fourier transform of Dirac comb:

```wolfram
FourierTransform[DiracComb[x], x, k]
```

Sampling with DiracComb:

```wolfram
DiracComb[x] Sin[2 Pi x]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DiracComb.html) for more details.*
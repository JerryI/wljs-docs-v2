---
title: HessenbergDecomposition
---

`HessenbergDecomposition[m]` gives the Hessenberg decomposition of a numerical matrix m.

## Examples

```wolfram
HessenbergDecomposition[{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}]
```

```wolfram
{p, h} = HessenbergDecomposition[RandomReal[1, {4, 4}]];
p . h . ConjugateTranspose[p]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HessenbergDecomposition.html) for more details.
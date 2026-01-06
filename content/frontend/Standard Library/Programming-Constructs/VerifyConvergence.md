---
title: VerifyConvergence
---

`VerifyConvergence` is an option to `Sum`, `NSum`, and similar functions that specifies whether convergence checking should be done.

## Examples

```wolfram
NSum[1/n^2, {n, 1, Infinity}, VerifyConvergence -> True]
```

```wolfram
Sum[1/n, {n, 1, Infinity}, VerifyConvergence -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VerifyConvergence.html) for more details.*
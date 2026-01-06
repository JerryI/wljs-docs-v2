---
title: TransferFunctionFactor
---

`TransferFunctionFactor[tfm]` factors the polynomial terms in the numerators and denominators of the `TransferFunctionModel` tfm.

## Examples

```wolfram
tfm = TransferFunctionModel[(s + 1)/(s^2 + 3 s + 2), s];
TransferFunctionFactor[tfm]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionFactor.html) for more details.*
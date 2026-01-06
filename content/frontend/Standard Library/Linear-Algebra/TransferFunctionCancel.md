---
title: TransferFunctionCancel
---

`TransferFunctionCancel[tfm]` cancels common poles and zeros in the `TransferFunctionModel` tfm.

`TransferFunctionCancel[tfm, crit]` cancels only common pole-zero pairs ei for which `crit[ei]` is `True`.

## Examples

Cancel common factors in a transfer function:

```wolfram
tf = TransferFunctionModel[(s - 1)/((s - 1)(s + 2)), s];
TransferFunctionCancel[tf]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionCancel.html) for more details.*
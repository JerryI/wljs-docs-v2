---
title: TransferFunctionExpand
---

`TransferFunctionExpand[tfm]` expands polynomial terms in the numerators and denominators of the TransferFunctionModel tfm.

## Examples

Expand a transfer function model:

```wolfram
tfm = TransferFunctionModel[(s + 1)^2/(s^2 + 2s + 1), s];
TransferFunctionExpand[tfm]
(* TransferFunctionModel[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionExpand.html) for more details.*
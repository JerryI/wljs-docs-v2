---
title: TransferFunctionTransform
---

`TransferFunctionTransform[f,tf]` transforms the TransferFunctionModel object tf using the transformation function f.

## Examples

Apply a bilinear transformation:

```wolfram
tf = TransferFunctionModel[1/(s + 1), s];
TransferFunctionTransform[(z - 1)/(z + 1) &, tf]
```

Scale the frequency:

```wolfram
TransferFunctionTransform[2 # &, tf]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TransferFunctionTransform.html) for more details.*
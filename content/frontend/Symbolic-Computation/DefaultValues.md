---
title: DefaultValues
---

`DefaultValues[f]` gives a list of transformation rules corresponding to default values of f.

`DefaultValues["symbol"]` gives a list of transformation rules corresponding to all default values defined for the symbol named "symbol" if it exists.

## Examples

Get default values for a function:

```wolfram
f[x_, y_:0] := x + y;
DefaultValues[f]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DefaultValues.html) for more details.
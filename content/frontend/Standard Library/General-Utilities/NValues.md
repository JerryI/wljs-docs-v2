---
title: NValues
---

`NValues[f]` gives a list of transformation rules corresponding to all numerical values (values for `N[f[x,…],…]`, etc.) defined for the symbol f.

## Examples

Get numerical values:

```wolfram
NValues[Pi]
```

Define custom N value:

```wolfram
N[myConst] ^= 2.71828;
NValues[myConst]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NValues.html) for more details.*
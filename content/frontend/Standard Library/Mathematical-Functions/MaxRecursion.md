---
title: MaxRecursion
---

`MaxRecursion` is an option for functions like `NIntegrate` and `Plot` that specifies how many recursive subdivisions can be made.

## Examples

Use with NIntegrate:

```wolfram
NIntegrate[Sin[x^2], {x, 0, 10}, MaxRecursion -> 20]
```

Use with Plot:

```wolfram
Plot[Sin[1/x], {x, 0.01, 1}, MaxRecursion -> 5]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MaxRecursion.html) for more details.*
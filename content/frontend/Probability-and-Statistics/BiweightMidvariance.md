---
title: BiweightMidvariance
---

`BiweightMidvariance[list]` gives the value of the biweight midvariance of the elements in list.

`BiweightMidvariance[list, c]` gives the value of the biweight midvariance with scaling parameter c.

## Examples

Robust variance estimate:

```wolfram
BiweightMidvariance[{1, 2, 3, 4, 100}]
```

Compare with standard variance:

```wolfram
{BiweightMidvariance[{1, 2, 3, 4, 5}], Variance[{1, 2, 3, 4, 5}]}
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BiweightMidvariance.html) for more details.
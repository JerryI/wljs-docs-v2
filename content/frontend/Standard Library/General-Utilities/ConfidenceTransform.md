---
title: ConfidenceTransform
---

`ConfidenceTransform` is an option for functions such as SurvivalModelFit that specifies the transformation used for confidence intervals and bands.

## Examples

Fit a survival model with a specific confidence transform:

```wolfram
data = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
SurvivalModelFit[data, ConfidenceTransform -> "LogLog"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConfidenceTransform.html) for more details.*
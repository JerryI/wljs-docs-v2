---
title: CoxModel
---

`CoxModel[...]` represents the symbolic proportional hazards model obtained from CoxModelFit.

## Examples

Fit a Cox model and get properties:

```wolfram
data = {{1, 0}, {2, 1}, {3, 0}, {4, 1}};
model = CoxModelFit[data];
model["HazardRatio"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CoxModel.html) for more details.*
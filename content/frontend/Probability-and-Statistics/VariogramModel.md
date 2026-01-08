---
title: VariogramModel
---

`VariogramModel["model", {params}]` represents the function for the variogram model specified by "model".

## Examples

Create a spherical variogram model:

```wolfram
VariogramModel["Spherical", {1, 10}]
```

Plot a variogram model:

```wolfram
Plot[VariogramModel["Gaussian", {1, 5}][h], {h, 0, 20}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VariogramModel.html) for more details.*
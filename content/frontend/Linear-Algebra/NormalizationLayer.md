---
title: NormalizationLayer
---

`NormalizationLayer[]` represents a trainable net layer that normalizes its input data across the second and subsequent dimensions and applies an independent scaling and bias to each component of the first dimension.

- `NormalizationLayer[aggregationlevels]` normalizes data across the specified aggregation levels and applies a learned scaling and bias on the remaining levels.
- `NormalizationLayer[aggregationlevels, scalinglevels]` applies a learned scaling and bias at the specified scaling levels.

## Examples

Basic normalization:

```wolfram
NormalizationLayer[]
```

Batch normalization:

```wolfram
NormalizationLayer[{2, 3}]
```

Layer normalization:

```wolfram
NormalizationLayer[{1}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NormalizationLayer.html) for more details.
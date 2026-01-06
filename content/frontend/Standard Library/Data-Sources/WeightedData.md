---
title: WeightedData
---

`WeightedData[{x1, x2, ...}, {w1, w2, ...}]` represents observations xi with weights wi.

- `WeightedData[{x1, x2, ...}, fn]` represents observations xi with weighting function fn.

## Examples

```wolfram
data = WeightedData[{1, 2, 3, 4}, {0.5, 1, 1.5, 2}];
Mean[data]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WeightedData.html) for more details.*
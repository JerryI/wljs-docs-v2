---
title: MovingAverage
---

`MovingAverage[list, r]` gives the moving average of list, computed by averaging runs of r elements.

- `MovingAverage[list, {w1, w2, ..., wr}]` gives the moving average of list, computed with weights wi.

## Examples

```wolfram
MovingAverage[{1, 2, 3, 4, 5, 6, 7}, 3]
```

```wolfram
MovingAverage[Range[10], {1, 2, 1}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/MovingAverage.html) for more details.*
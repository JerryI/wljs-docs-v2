---
title: ExponentialMovingAverage
---

`ExponentialMovingAverage[list, α]` gives the exponential moving average of list with smoothing constant α.

## Examples

Compute exponential moving average:

```wolfram
ExponentialMovingAverage[{1, 2, 3, 4, 5}, 0.5]
(* {1, 1.5, 2.25, 3.125, 4.0625} *)
```

Compare with different smoothing constants:

```wolfram
data = {1, 3, 2, 5, 4};
{ExponentialMovingAverage[data, 0.2], ExponentialMovingAverage[data, 0.8]}
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExponentialMovingAverage.html) for more details.*
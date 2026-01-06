---
title: PointValuePlot
---

`PointValuePlot[{pt1 -> val1, pt2 -> val2, ...}]` plots the points pti styled according to the values vali.

- `PointValuePlot[pts -> vals]` uses a collection of points pti from pts with corresponding values vali from val.
- `PointValuePlot[..., enc]` uses the visual encoding enc to represent the values vali in the plot.
- `PointValuePlot[data, ...]` plots the locations and values from data.

## Examples

```wolfram
PointValuePlot[{{0, 0} -> 1, {1, 1} -> 2, {2, 0} -> 3}]
```

```wolfram
PointValuePlot[RandomReal[1, {20, 2}] -> RandomReal[1, 20]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointValuePlot.html) for more details.*
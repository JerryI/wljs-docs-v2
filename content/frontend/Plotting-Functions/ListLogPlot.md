---
title: ListLogPlot
---

`ListLogPlot[{y1, y2, ...}]` makes a log plot of the yi values with logarithmic vertical axis.

## Examples

Log plot of data:

```wolfram
ListLogPlot[{1, 10, 100, 1000, 10000}]
```

With coordinates:

```wolfram
data = Table[{x, Exp[x]}, {x, 1, 5}];
ListLogPlot[data]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListLogPlot.html) for more details.
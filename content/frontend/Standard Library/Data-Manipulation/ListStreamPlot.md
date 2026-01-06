---
title: ListStreamPlot
---

`ListStreamPlot[varr]` generates a stream plot from an array varr of vectors.

`ListStreamPlot[{{{x1,y1},{vx1,vy1}},…}]` generates a stream plot from vectors {vxi,vyi} given at points {xi,yi}.

`ListStreamPlot[{data1,data2,…}]` plots data for several vector fields.

## Examples

Create a stream plot from a vector array:

```wolfram
ListStreamPlot[Table[{y, -x}, {x, -3, 3}, {y, -3, 3}]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ListStreamPlot.html) for more details.*
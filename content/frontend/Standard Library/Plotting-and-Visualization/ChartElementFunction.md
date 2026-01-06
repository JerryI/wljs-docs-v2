---
title: ChartElementFunction
---

`ChartElementFunction` is an option for charting functions such as `BarChart` that gives a function to use to generate the primitives for rendering each chart element.

## Examples

Use a custom element function:

```wolfram
BarChart[{1, 2, 3}, ChartElementFunction -> (Rectangle[#1[[1]], #1[[2]]] &)]
```

Use a built-in element function:

```wolfram
BarChart[{1, 2, 3, 4}, ChartElementFunction -> "GlassRectangle"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChartElementFunction.html) for more details.*
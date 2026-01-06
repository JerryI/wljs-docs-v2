# ChartElements

`ChartElements` is an option to charting functions such as BarChart that specifies the graphics to use as the basis for bars or other chart elements.

## Examples

Use a custom chart element:

```wolfram
BarChart[{1, 2, 3}, ChartElements -> Graphics[Disk[]]]
```

Use built-in chart elements:

```wolfram
BarChart[{1, 2, 3, 4}, ChartElements -> "GlassRectangle"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChartElements.html) for more details.*
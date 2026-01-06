---
title: PointLegend
---

`PointLegend[{col1, ...}, {lbl1, ...}]` generates a legend that associates points of colors coli with labels lbli.

- `PointLegend[{col1, ...}, Automatic]` generates a legend with placeholder labels.
- `PointLegend[{lbl1, ...}]` represents a legend with inherited colors within visualization functions.

## Examples

```wolfram
PointLegend[{Red, Blue, Green}, {"A", "B", "C"}]
```

```wolfram
ListPlot[data, PlotLegends -> PointLegend[{"Series 1", "Series 2"}]]
```

```wolfram
PointLegend[{Red, Blue}, Automatic]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PointLegend.html) for more details.*
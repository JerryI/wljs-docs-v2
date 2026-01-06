---
title: LabelingSize
---

`LabelingSize` is an option to visualization functions that specifies the size to be used for labels and callouts.

This option controls the maximum size of labels in plots and charts.

## Examples

```wolfram
PieChart[{1, 2, 3}, ChartLabels -> {"A", "B", "C"}, LabelingSize -> 50]
```

```wolfram
BarChart[{1, 2, 3}, ChartLabels -> Automatic, LabelingSize -> 30]
```

```wolfram
ListPlot[{{1, 2}, {3, 4}}, LabelingFunction -> Automatic, LabelingSize -> 20]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LabelingSize.html) for more details.*
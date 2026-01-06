# StackedListPlot

`StackedListPlot[{data1, data2, ...}]` plots lines for each of the datai, with the ith curve being the accumulation of values in data1 through datai.

## Examples

Create a stacked list plot:

```wolfram
StackedListPlot[{Range[10], Range[10, 1, -1], Table[5, 10]}]
```

With filling:

```wolfram
StackedListPlot[{Range[5], Range[5, 1, -1]}, Filling -> Axis]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StackedListPlot.html) for more details.*
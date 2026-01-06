# StackedDateListPlot

`StackedDateListPlot[{{date1, y1}, {date2, y2}, ...}]` plots points with values yi at a sequence of dates.

`StackedDateListPlot[{data1, data2, ...}]` plots data from all the datai.

`StackedDateListPlot[tseries]` plots the time series tseries.

## Examples

Create a stacked date list plot:

```wolfram
data1 = Table[{DatePlus[{2020, 1, 1}, i], RandomReal[10]}, {i, 0, 30}];
data2 = Table[{DatePlus[{2020, 1, 1}, i], RandomReal[10]}, {i, 0, 30}];
StackedDateListPlot[{data1, data2}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StackedDateListPlot.html) for more details.*
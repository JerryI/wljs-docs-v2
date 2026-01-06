# DateListLogPlot

`DateListLogPlot[{{date1, y1}, {date2, y2}, ...}]` makes a log plot with values yi at a sequence of dates.

`DateListLogPlot[{y1, y2, ...}, datespec]` makes a log plot with dates at equal intervals specified by datespec.

`DateListLogPlot[tseries]` plots the time series tseries.

`DateListLogPlot[{data1, data2, ...}]` plots data from all the datai.

## Examples

Plot data with logarithmic scale:

```wolfram
DateListLogPlot[{
  {{2020, 1}, 10}, {{2020, 6}, 100}, {{2021, 1}, 1000}
}]
```

From a time series:

```wolfram
ts = TimeSeries[{1, 10, 100, 1000}, {{2020, 1, 1}, Automatic, "Month"}];
DateListLogPlot[ts]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateListLogPlot.html) for more details.*
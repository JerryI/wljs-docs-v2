# TimeSeriesInsert

`TimeSeriesInsert[tseries, {t, v}]` inserts a value v at time t in the time series tseries.

- `TimeSeriesInsert[tseries1, tseries2]` inserts the time-value pairs from tseries2 into tseries1.

## Examples

```wolfram
ts = TimeSeries[{{1, 10}, {2, 20}, {3, 30}}];
TimeSeriesInsert[ts, {2.5, 25}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesInsert.html) for more details.*
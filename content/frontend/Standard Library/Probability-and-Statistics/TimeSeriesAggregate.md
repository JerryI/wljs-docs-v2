---
title: TimeSeriesAggregate
---

`TimeSeriesAggregate[tseries, dt]` computes the mean value of tseries over non-overlapping windows of width dt.

`TimeSeriesAggregate[tseries, dt, f]` applies the function f to the values of tseries in non-overlapping windows of width dt.

## Examples

Aggregate a time series by computing means:

```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5, 6}, {0, 6}];
TimeSeriesAggregate[ts, 2]
```

Use a custom aggregation function:

```wolfram
TimeSeriesAggregate[ts, 2, Max]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesAggregate.html) for more details.*
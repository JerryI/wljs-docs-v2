---
title: TimeSeriesMap
---

`TimeSeriesMap[f, tseries]` applies f to the values in tseries.

## Examples

Apply a function to time series values:

```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5}];
TimeSeriesMap[#^2 &, ts]
```

Take the logarithm of values:

```wolfram
TimeSeriesMap[Log, ts]
```

Apply a smoothing function:

```wolfram
TimeSeriesMap[MovingAverage[#, 3] &, ts]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesMap.html) for more details.
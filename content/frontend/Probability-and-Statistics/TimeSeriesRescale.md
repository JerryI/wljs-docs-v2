---
title: TimeSeriesRescale
---

`TimeSeriesRescale[tseries, {tmin, tmax}]` rescales the times in time series tseries to run from tmin to tmax.

- `TimeSeriesRescale[tseries, {tmin, tmax, tu}]` rescales times in units of tu including "Month", "Quarter", or "Year".

## Examples

```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5}];
TimeSeriesRescale[ts, {0, 10}]
```

```wolfram
TimeSeriesRescale[ts, {DateObject[{2020, 1, 1}], DateObject[{2020, 12, 31}]}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesRescale.html) for more details.*
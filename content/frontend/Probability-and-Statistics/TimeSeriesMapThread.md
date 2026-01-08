---
title: TimeSeriesMapThread
---

`TimeSeriesMapThread[f, tseries]` gives {{t1, f[t1, x1]}, {t2, f[t2, x2]}, …} for the time series tseries.

- `TimeSeriesMapThread[f, tseries, {{a1, a2, …}, {b1, b2, …}, …}]` gives {{t1, f[t1, x1, a1, b1, …]}, {t2, f[t2, x2, a2, b2, …]}, …} for the time series tseries.

## Examples

```wolfram
ts = TimeSeries[{1, 2, 3, 4}, {0, 3}];
TimeSeriesMapThread[{#1, #2^2} &, ts]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesMapThread.html) for more details.
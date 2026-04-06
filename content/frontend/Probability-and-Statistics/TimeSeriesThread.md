---
title: TimeSeriesThread
---

`TimeSeriesThread[f,{tseries1,tseries2,…}]` combines the tseriesi using the function f.

## Examples

Combine two time series by adding their values:

```wolfram
ts1 = TimeSeries[{1, 2, 3}, {0, 2}];
ts2 = TimeSeries[{4, 5, 6}, {0, 2}];
TimeSeriesThread[Plus, {ts1, ts2}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesThread.html) for more details.
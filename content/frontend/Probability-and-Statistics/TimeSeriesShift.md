---
title: TimeSeriesShift
---

`TimeSeriesShift[tseries, shift]` shifts the time series tseries to the left or right according to shift.

## Examples

Shift a time series forward by 5 units:
```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5}];
TimeSeriesShift[ts, 5]
```

Shift backward by 2 units:
```wolfram
TimeSeriesShift[TimeSeries[Range[10]], -2]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesShift.html) for more details.
---
title: TimeSeriesWindow
---

`TimeSeriesWindow[tseries,{tmin,tmax}]` gives the elements of the time series tseries that fall between tmin and tmax.

`TimeSeriesWindow[tseries,windowspec]` gives the elements of the time series tseries that satisfy the window specification windowspec.

## Examples

Extract a window from a time series:

```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5}, {0, 4}];
TimeSeriesWindow[ts, {1, 3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesWindow.html) for more details.
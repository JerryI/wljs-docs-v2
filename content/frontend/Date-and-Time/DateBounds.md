---
title: DateBounds
---

`DateBounds[{date1, date2, …}]` gives the earliest and latest of the datei.

`DateBounds[tseries]` gives the first and last dates in the time series tseries.

`DateBounds[bin]` gives the first and last time stamps in the databin bin.

`DateBounds[interval]` gives the start and end dates of the date interval interval.

`DateBounds[interval, gran]` gives the endpoints of interval in the specified granularity gran.

## Examples

Find bounds of a list of dates:

```wolfram
DateBounds[{DateObject[{2020, 1, 1}], DateObject[{2022, 6, 15}], DateObject[{2021, 3, 10}]}]
```

Get bounds from a time series:

```wolfram
ts = TimeSeries[{{1, 10}, {2, 20}, {3, 15}}];
DateBounds[ts]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DateBounds.html) for more details.
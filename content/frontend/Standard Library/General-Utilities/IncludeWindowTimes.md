# IncludeWindowTimes

`IncludeWindowTimes` is an option to `TimeSeriesWindow` that specifies whether the endpoints in the time window should be included.

## Examples

```wolfram
ts = TimeSeries[{1, 2, 3, 4, 5}, {0, 4}];
TimeSeriesWindow[ts, {1, 3}, IncludeWindowTimes -> All]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/IncludeWindowTimes.html) for more details.*
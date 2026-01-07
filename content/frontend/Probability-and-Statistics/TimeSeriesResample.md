---
title: TimeSeriesResample
---

`TimeSeriesResample[tseries]` uniformly resamples tseries according to its minimum time increment.

`TimeSeriesResample[tseries, rspec]` resamples tseries according to rspec.

## Examples

Resample a time series uniformly:

```wolfram
ts = TimeSeries[{{0, 1}, {1, 3}, {4, 2}}];
TimeSeriesResample[ts]
```

Resample with specified step:

```wolfram
TimeSeriesResample[ts, {0, 4, 0.5}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesResample.html) for more details.*
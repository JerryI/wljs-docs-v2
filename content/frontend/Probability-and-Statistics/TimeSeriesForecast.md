---
title: TimeSeriesForecast
---

`TimeSeriesForecast[tproc, data, k]` gives the k-step-ahead forecast beyond data according to the time series process tproc.

- `TimeSeriesForecast[tsmod, k]` gives the k-step-ahead forecast for `TimeSeriesModel` tsmod.

## Examples

```wolfram
TimeSeriesForecast[ARProcess[{0.5}, 1], {1, 2, 3, 4, 5}, 3]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesForecast.html) for more details.*
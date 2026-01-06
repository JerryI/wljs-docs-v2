---
title: TemporalRegularity
---

`TemporalRegularity` is an option for `TemporalData`, `TimeSeries`, and `EventSeries` that controls whether the paths are assumed to be uniformly spaced in time.

## Examples

```wolfram
TimeSeries[{1, 2, 3, 4, 5}, TemporalRegularity -> True]
```

```wolfram
TimeSeries[{{1, 1}, {2, 4}, {5, 3}}, TemporalRegularity -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemporalRegularity.html) for more details.*
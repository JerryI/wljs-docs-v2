# EventSeries

`EventSeries[{{t1, v1}, {t2, v2}, ...}]` represents a series of events given as time-value pairs {ti, vi}.

`EventSeries[{v1, v2, ...}, tspec]` represents a series of events with values vi at times specified by tspec.

## Examples

```wolfram
EventSeries[{{0, "start"}, {1, "middle"}, {2, "end"}}]
```

```wolfram
EventSeries[{1, 0, 1, 0}, {0, 4}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EventSeries.html) for more details.*
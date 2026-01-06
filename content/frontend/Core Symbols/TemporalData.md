# TemporalData

`TemporalData[{v1, v2, ...}, tspec]` represents temporal data with values vi at times specified by tspec.

- `TemporalData[{{v11, v12, ...}, {v21, v22, ...}, ...}, tspec]` represents a temporal data collection with values vij at times specified by tspec.
- `TemporalData[{{t1, v1}, {t2, v2}, ...}]` represents temporal data specified by time-value pairs {ti, vi}.
- `TemporalData[{{{t11, v11}, {t12, v12}, ...}, {{t21, v21}, {t22, v22}, ...}, ...}]` represents a temporal data collection given as lists of time-value pairs.

## Examples

```wolfram
TemporalData[{1, 2, 3, 4, 5}, {0, 1, 2, 3, 4}]
```

```wolfram
TemporalData[{{0, 1}, {1, 4}, {2, 9}, {3, 16}}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TemporalData.html) for more details.*
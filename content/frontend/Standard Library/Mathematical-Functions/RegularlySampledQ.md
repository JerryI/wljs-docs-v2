# RegularlySampledQ

`RegularlySampledQ[tseries]` gives `True` if tseries is a regular time series, and `False` otherwise.

## Examples

```wolfram
ts = TimeSeries[{1, 2, 3}, {0, 1, 2}];
RegularlySampledQ[ts]
```

```wolfram
ts2 = TimeSeries[{1, 2, 3}, {0, 1, 3}];
RegularlySampledQ[ts2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RegularlySampledQ.html) for more details.*
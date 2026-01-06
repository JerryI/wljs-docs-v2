# TimeSeriesModel

`TimeSeriesModel[...]` represents the symbolic time series model obtained from `TimeSeriesModelFit`.

This object contains fitted model parameters and can be used for forecasting.

## Examples

```wolfram
model = TimeSeriesModelFit[data]
model["BestFit"]
```

```wolfram
TimeSeriesForecast[model, {10}]
```

```wolfram
model["Properties"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesModel.html) for more details.*
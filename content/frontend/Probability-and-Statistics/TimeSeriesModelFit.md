---
title: TimeSeriesModelFit
---

`TimeSeriesModelFit[data]` constructs a time series model for data from an automatically selected model family.

`TimeSeriesModelFit[data,mspec]` constructs a time series model for data from a model family specified by mspec.

## Examples

```wolfram
TimeSeriesModelFit[{1, 2, 4, 7, 11, 16}]
(* TimeSeriesModel[...] *)
```

```wolfram
TimeSeriesModelFit[data, "ARMA"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TimeSeriesModelFit.html) for more details.
---
title: SARIMAProcess
---

`SARIMAProcess[{a1, ..., ap}, d, {b1, ..., bq}, {s, {α1, ..., αm}, δ, {β1, ..., βr}}, v]` represents a seasonal integrated autoregressive moving-average process with ARIMA coefficients, seasonal order s, and variance v.

- `SARIMAProcess[..., Σ]` represents a vector SARIMA process with covariance matrix Σ.
- `SARIMAProcess[..., init]` represents a SARIMA process with initial data init.
- `SARIMAProcess[c, ...]` represents a SARIMA process with constant c.

## Examples

```wolfram
SARIMAProcess[{0.5}, 1, {0.3}, {12, {0.2}, 1, {0.1}}, 1]
```

```wolfram
RandomFunction[SARIMAProcess[{0.5}, 1, {0.3}, {12, {0.2}, 1, {0.1}}, 1], {0, 100}]
```

```wolfram
TimeSeriesModelFit[data, "SARIMA"]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SARIMAProcess.html) for more details.

---
title: InflationAdjust
---

`InflationAdjust[quantity, targetdate]` attempts to adjust the specified quantity purchasing power to `targetdate`.

- `InflationAdjust[quantity]` uses the current year as `targetdate`.
- `InflationAdjust[quantity, targetunit]` converts the currency to `targetunit` after adjusting to the current year.
- `InflationAdjust[timeseries, targetdate]` attempts to adjust the specified `timeseries` data purchasing power to `targetdate`.

## Examples

```wolfram
InflationAdjust[Quantity[100, "USDollars"], 2020]
```

```wolfram
InflationAdjust[Quantity[1000, "USDollars" -> {1950}], 2020]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/InflationAdjust.html) for more details.*
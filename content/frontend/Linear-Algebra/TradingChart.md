---
title: TradingChart
---

`TradingChart[{{date1, {open1, high1, low1, close1, volume1}}, ...}]` makes a chart showing prices and volume for each date.

- `TradingChart[{"name", daterange}]` makes a financial chart for the financial entity "name" over the daterange.
- `TradingChart[{...}, {ind1, ind2, ...}]` makes a financial chart with indicators ind1, ind2, ….

## Examples

```wolfram
TradingChart[{"AAPL", {2020, 2021}}]
```

```wolfram
TradingChart[{"GOOG", {2021}}, {"Volume", "BollingerBands"}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TradingChart.html) for more details.